import { Axios } from "@/utils";
import React from "react";
import { match } from "ts-pattern";

export interface Data {
  id: string;
  name: string;
  description: string;
}

export type State =
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'success'; data: Data[] }
  | { type: 'error'; error: string }
  | { type: 'submitting', data: Record<string, any> }
  | { type: 'submitted' }
  | { type: 'submitError'; error: string };

export type Action =
  | { type: 'FETCH' }
  | { type: 'FETCH_SUCCESS'; data: Data[] }
  | { type: 'FETCH_ERROR'; message: string }
  | { type: 'SUBMIT', data: Record<string, any> }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; message: string }

const reducer = (state: State, action: Action): State => {
  return match<[State, Action], State>([state, action])
    .with([{ type: 'idle' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .with([{ type: 'loading' }, { type: 'FETCH_SUCCESS' }], ([_, action]) => ({
      type: 'success',
      data: action.data,
    }))
    .with([{ type: 'loading' }, { type: 'FETCH_ERROR' }], ([_, action]) => ({
      type: 'error',
      error: action.message,
    }))
    .with([{ type: 'error' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .with([{ type: 'success' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .with([{ type: 'idle' }, { type: 'SUBMIT' }], ([_, action]) => (
      { type: 'submitting', data: action.data }
    ))
    .with([{ type: 'success' }, { type: 'SUBMIT' }], ([_, action]) => (
      { type: 'submitting', data: action.data }
    ))
    .with([{ type: 'submitting' }, { type: 'SUBMIT_SUCCESS' }], () => (
      { type: 'submitted' }
    ))
    .with([{ type: 'submitting' }, { type: 'SUBMIT_ERROR' }], ([_, action]) => ({
      type: 'submitError',
      error: action.message,
    }))
    .with([{ type: 'submitError' }, { type: 'SUBMIT' }], ([_, action]) => ({ type: 'submitting', data: action.data }))
    .with([{ type: 'submitted' }, { type: 'SUBMIT' }], ([_, action]) => ({ type: 'submitting', data: action.data }))
    .with([{ type: 'submitted' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .otherwise(() => state);
};

const onChange = (state: State, dispatch: (action: Action) => void) => {
  match(state)
    .with({ type: 'idle' }, () => dispatch({ type: 'FETCH' }))
    .with({ type: 'loading' }, () => {
      Axios.get('/product')
        .then((res) => {
          dispatch({ type: 'FETCH_SUCCESS', data: res.data.data });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_ERROR', message: err.message });
        });
    })
    .with({ type: 'submitting' }, (state) => {
      Axios.post('/product', state.data)
        .then(() => {
          dispatch({ type: 'SUBMIT_SUCCESS' });
        })
        .catch((err) => {
          dispatch({ type: 'SUBMIT_ERROR', message: err.message });
        });
    })
    .with({ type: 'submitted' }, () => dispatch({ type: 'FETCH' }))
    .otherwise(() => { });
};

const initialState: State = { type: 'idle' };

export const useExploreMachine = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  React.useEffect(() => {
    onChange(state, dispatch);
  }, [state]);

  return [state, dispatch] as const;
}
