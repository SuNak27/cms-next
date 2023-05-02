
import { Axios } from '../../utils'
import React from "react";
import { match } from "ts-pattern";
import { UseDisclosureReturn } from '@chakra-ui/react';

export type State = {
  type:
  | 'idle'
  | 'fetching'
  | 'fetching_success'
  | 'fetching_error'
  | 'creating'
  | 'creating_data'
  | 'creating_success'
  | 'creating_error'
  | 'updating'
  | 'updating_data'
  | 'updating_success'
  | 'updating_error'
  | 'deleting'
  | 'deleting_cancel'
  | 'deleting_success'
  | 'deleting_error',
  data?: any[],
  limit?: number,
  totalPage?: number,
  page?: number,
  search?: string,
  error?: string,
  message?: string,
  payload?: any,
  id?: number,
};

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
  | { type: 'UPDATE', payload: any }
  | { type: 'UPDATE_DATA', payload: any }
  | { type: 'UPDATE_SUCCESS' }
  | { type: 'UPDATE_ERROR', message: string }

const reducer = (state: State, action: Action): State => {
  return match<[State, Action], State>([state, action])
    .with([{ type: 'idle' }, { type: 'FETCH' }], () => ({
      type: 'fetching',
      limit: 10,
      page: 1,
    }))
    .with([{ type: 'fetching' }, { type: 'FETCH_SUCCESS' }], ([_, action]) => ({
      type: 'fetching_success',
      data: action.data,
      limit: action.per_page,
      totalPage: action.total_pages,
      page: action.page,
    }))
    .with([{ type: 'fetching' }, { type: 'FETCH_ERROR' }], ([_, action]) => ({
      type: 'fetching_error',
      error: action.message,
    }))
    .with([{ type: 'fetching_error' }, { type: 'FETCH' }], () => ({ type: 'fetching' }))
    .with([{ type: 'fetching_success' }, { type: 'FETCH' }], () => ({ type: 'fetching' }))
    .with([{ type: 'fetching_success' }, { type: 'CHANGE_PAGE' }], ([_, action]) => ({
      type: 'fetching',
      page: action.page,
      limit: state.limit,
      totalPage: state.totalPage,
    }))
    .with([{ type: 'fetching_success' }, { type: 'CHANGE_SEARCH' }], ([_, action]) => ({
      type: 'fetching',
      search: action.search,
      totalPage: state.totalPage,
      limit: 10,
      page: 1,
    }))
    .with([{ type: 'fetching_success' }, { type: 'CHANGE_LIMIT' }], ([_, action]) => ({
      type: 'fetching',
      limit: action.limit,
      totalPage: state.totalPage,
    }))
    .with([{ type: 'fetching_success' }, { type: 'CREATE' }], ([state, _]) => ({
      ...state,
      type: 'creating',
    }))
    .with([{ type: 'creating' }, { type: 'CREATE_DATA' }], ([state, action]) => ({
      ...state,
      type: 'creating_data',
      payload: action.payload,
    }))
    .with([{ type: 'creating_data' }, { type: 'CREATE_SUCCESS' }], () => ({
      type: 'creating_success',
    }))
    .with([{ type: 'creating_success' }, { type: 'FETCH' }], () => ({
      type: 'fetching',
      limit: 10,
      page: 1
    }))
    .with([{ type: 'creating_data' }, { type: 'CREATE_ERROR' }], ([_, action]) => ({
      type: 'creating_error',
      message: action.message,
    }))
    .with([{ type: 'creating_error' }, { type: 'FETCH' }], () => ({ type: 'fetching' }))
    .with([{ type: 'fetching_success' }, { type: 'UPDATE' }], ([state, action]) => ({
      ...state,
      type: 'updating',
      payload: action.payload,
    }))
    .with([{ type: 'creating' }, { type: 'UPDATE' }], ([state, action]) => ({
      ...state,
      type: 'updating',
      payload: action.payload,
    }))
    .with([{ type: 'updating' }, { type: 'CREATE' }], () => ({
      ...state,
      type: 'creating',
    }))
    .with([{ type: 'creating' }, { type: 'CHANGE_PAGE' }], ([_, action]) => ({
      type: 'fetching',
      page: action.page,
      limit: state.limit,
      totalPage: state.totalPage,
    }))
    .with([{ type: 'creating' }, { type: 'CHANGE_SEARCH' }], ([_, action]) => ({
      type: 'fetching',
      search: action.search,
      totalPage: state.totalPage,
    }))
    .with([{ type: 'creating' }, { type: 'CHANGE_LIMIT' }], ([_, action]) => ({
      type: 'fetching',
      limit: action.limit,
      totalPage: state.totalPage,
    }))
    .with([{ type: 'updating' }, { type: 'CHANGE_PAGE' }], ([_, action]) => ({
      type: 'fetching',
      page: action.page,
      limit: state.limit,
      totalPage: state.totalPage,
    }))
    .with([{ type: 'updating' }, { type: 'CHANGE_SEARCH' }], ([_, action]) => ({
      type: 'fetching',
      search: action.search,
      totalPage: state.totalPage,
    }))
    .with([{ type: 'updating' }, { type: 'UPDATE_DATA' }], ([_, action]) => ({
      type: 'updating_data',
      payload: action.payload,
    }))
    .with([{ type: 'updating_data' }, { type: 'UPDATE_SUCCESS' }], () => ({
      type: 'updating_success',
    }))
    .with([{ type: 'updating_success' }, { type: 'FETCH' }], () => ({
      type: 'fetching',
      limit: 10,
      page: 1
    }))
    .with([{ type: 'updating_data' }, { type: 'UPDATE_ERROR' }], ([_, action]) => ({
      ...state,
      type: 'updating_error',
      message: action.message,
    }))
    .with([{ type: 'updating_error' }, { type: 'FETCH' }], () => ({
      type: 'fetching',
      limit: 10,
      page: 1
    }))
    .otherwise(() => state);
};

const onChange = (state: State, dispatch: (action: Action) => void, apiUrl: string, modal: UseDisclosureReturn, primaryKey: string) => {
  match(state)
    .with({ type: 'idle' }, () => dispatch({ type: 'FETCH' }))
    .with({ type: 'fetching' }, () => {
      Axios.get(`${apiUrl}`, {
        params: {
          page: state.page,
          limit: state.limit,
          cari: state.search,
        }
      })
        .then((res) => {
          dispatch({
            type: 'FETCH_SUCCESS',
            data: res.data.data,
            per_page: res.data.per_page,
            total_pages: res.data.total_pages,
            page: state.page,
            search: state.search,
          });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_ERROR', message: err.message });
        });
    })
    .with({ type: 'creating_data' }, () => {
      Axios.post(`${apiUrl}`, state.payload)
        .then(() => {
          modal.onClose();
          dispatch({ type: 'CREATE_SUCCESS' });
        })
        .catch((err) => {
          modal.onClose();
          dispatch({ type: 'CREATE_ERROR', message: err.message });
        });
    })
    .with({ type: 'creating_success' }, () => dispatch({ type: 'FETCH' }))
    .with({ type: 'creating_error' }, () => dispatch({ type: 'FETCH' }))
    .with({ type: 'updating_data' }, () => {
      Axios.put(`${apiUrl}/${state.payload[primaryKey]}`, state.payload)
        .then(() => {
          modal.onClose();
          dispatch({ type: 'UPDATE_SUCCESS' });
        })
        .catch((err) => {
          modal.onClose();
          dispatch({ type: 'UPDATE_ERROR', message: err.message });
        });
    })
    .with({ type: 'updating_success' }, () => dispatch({ type: 'FETCH' }))
    .with({ type: 'updating_error' }, () => dispatch({ type: 'FETCH' }))
    .otherwise(() => null);
}

const initialState: State = { type: 'idle' };

export const useCrudOnePageMachine = (apiUrl: string, modal: UseDisclosureReturn, primaryKey: string) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  React.useEffect(() => {
    onChange(state, dispatch, apiUrl, modal, primaryKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, state]);

  return [state, dispatch] as const;
}
