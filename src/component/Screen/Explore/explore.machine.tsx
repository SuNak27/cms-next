import { Axios } from "@/utils";
import React from "react";
import { match } from "ts-pattern";

export interface Data {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export type State =
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'success'; data: Data[] }
  | { type: 'error'; error: string };

export type Action =
  | { type: 'FETCH' }
  | { type: 'FETCH_SUCCESS'; data: Data[] }
  | { type: 'FETCH_ERROR'; message: string };

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
    .otherwise(() => state);
};

const onChange = (state: State, dispatch: (action: Action) => void) => {
  match(state)
    .with({ type: 'idle' }, () => dispatch({ type: 'FETCH' }))
    .with({ type: 'loading' }, () => {
      Axios.get('/products')
        .then((res) => {
          dispatch({ type: 'FETCH_SUCCESS', data: res.data.products });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_ERROR', message: err.message });
        });
    })
    .otherwise(() => null);
}

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
