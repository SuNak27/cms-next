
import { Axios } from '../../utils'
import React from "react";
import { match } from "ts-pattern";
import { UseDisclosureReturn } from '@chakra-ui/react';

export type State =
  | { type: 'idle' }
  | { type: 'loading'; page?: number; limit?: number, totalPage?: number, search?: string }
  |
  {
    type: 'success';
    data: any[];
    limit: number;
    totalPage: number
    page?: number;
    search?: string;
  }
  |
  {
    type: 'creating';
    data: any[];
    limit: number;
    totalPage: number
    page?: number;
    search?: string;
  }
  | { type: 'creating_data', payload: any }
  | { type: 'creating_success' }
  | { type: 'creating_error', message: string }
  | { type: 'updating' }
  | { type: 'error'; error: string };

export type Action =
  | { type: 'FETCH' }
  | { type: 'FETCH_SUCCESS'; data: any[]; per_page: number; total_pages: number; page?: number, search?: string }
  | { type: 'FETCH_ERROR'; message: string }
  | { type: 'CHANGE_PAGE'; page: number }
  | { type: 'CHANGE_SEARCH'; search: string }
  | { type: 'CHANGE_LIMIT'; limit: number }
  | { type: 'CREATE' }
  | { type: 'CREATE_DATA', payload: any }
  | { type: 'CREATE_SUCCESS' }
  | { type: 'CREATE_ERROR', message: string }

const reducer = (state: State, action: Action): State => {
  return match<[State, Action], State>([state, action])
    .with([{ type: 'idle' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .with([{ type: 'loading' }, { type: 'FETCH_SUCCESS' }], ([_, action]) => ({
      type: 'success',
      data: action.data,
      limit: action.per_page,
      totalPage: action.total_pages,
      page: action.page,
    }))
    .with([{ type: 'loading' }, { type: 'FETCH_ERROR' }], ([_, action]) => ({
      type: 'error',
      error: action.message,
    }))
    .with([{ type: 'error' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .with([{ type: 'success' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .with([{ type: 'success' }, { type: 'CHANGE_PAGE' }], ([_, action]) => ({
      type: 'loading',
      page: action.page,
      limit: state.type === 'success' ? state.limit : 10,
      totalPage: state.type === 'success' ? state.totalPage : 1,
    }))
    .with([{ type: 'creating' }, { type: 'CHANGE_PAGE' }], ([state, action]) => ({
      type: 'loading',
      page: action.page,
      limit: state.limit,
      totalPage: state.totalPage,
    }))
    .with([{ type: 'success' }, { type: 'CHANGE_SEARCH' }], ([_, action]) => ({
      type: 'loading',
      search: action.search,
      totalPage: state.type === 'success' ? state.totalPage : 1,
    }))
    .with([{ type: 'success' }, { type: 'CHANGE_LIMIT' }], ([_, action]) => ({
      type: 'loading',
      limit: action.limit,
      totalPage: state.type === 'success' ? state.totalPage : 1,
    }))
    .with([{ type: 'success' }, { type: 'CREATE' }], ([state, _]) => ({
      type: 'creating',
      data: state.data,
      limit: state.limit,
      totalPage: state.totalPage,
      page: state.page,
    }))
    .with([{ type: 'creating' }, { type: 'CREATE_DATA' }], ([_, action]) => ({
      type: 'creating_data',
      payload: action.payload,
    }))
    .with([{ type: 'creating_data' }, { type: 'CREATE_SUCCESS' }], () => ({
      type: 'creating_success',
    }))
    .with([{ type: 'creating_success' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .with([{ type: 'creating_data' }, { type: 'CREATE_ERROR' }], ([_, action]) => ({
      type: 'creating_error',
      message: action.message,
    }))
    .with([{ type: 'creating_error' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
    .otherwise(() => state);
};

const onChange = (state: State, dispatch: (action: Action) => void, apiUrl: string, onCreateClick: UseDisclosureReturn) => {
  match(state)
    .with({ type: 'idle' }, () => dispatch({ type: 'FETCH' }))
    .with({ type: 'loading' }, (action) => {
      Axios.get(`${apiUrl}`, {
        params: {
          page: action.page ?? 1,
          limit: action.limit ?? 10,
          cari: action.search ?? '',
        }
      })
        .then((res) => {
          dispatch({
            type: 'FETCH_SUCCESS',
            data: res.data.data,
            per_page: res.data.per_page,
            total_pages: res.data.total_pages,
            page: action.page,
            search: action.search,
          });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_ERROR', message: err.message });
        });
    })
    .with({ type: 'creating_data' }, (action) => {
      Axios.post(`${apiUrl}`, action.payload)
        .then(() => {
          onCreateClick.onClose();
          dispatch({ type: 'CREATE_SUCCESS' });
        })
        .catch((err) => {
          onCreateClick.onClose();
          dispatch({ type: 'CREATE_ERROR', message: err.message });
        });
    })
    .with({ type: 'creating_success' }, () => dispatch({ type: 'FETCH' }))
    .with({ type: 'creating_error' }, () => dispatch({ type: 'FETCH' }))
    .otherwise(() => null);
}

const initialState: State = { type: 'idle' };

export const useCrudOnePageMachine = (apiUrl: string, onCreateClick: UseDisclosureReturn) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  React.useEffect(() => {
    onChange(state, dispatch, apiUrl, onCreateClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, state]);

  return [state, dispatch] as const;
}
