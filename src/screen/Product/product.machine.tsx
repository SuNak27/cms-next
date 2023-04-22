// import { Axios } from "@/utils";
// import React from "react";
// import { match } from "ts-pattern";

// export interface Data {
//   id: string;
//   name: string;
//   description: string;
// }

// export type State =
//   | { type: 'idle' }
//   | { type: 'loading'; page?: number; limit?: number, totalPage?: number, search?: string }
//   |
//   {
//     type: 'success';
//     data: Data[];
//     limit: number;
//     totalPage: number
//     page?: number;
//     search?: string;
//   }
//   | { type: 'error'; error: string };

// export type Action =
//   | { type: 'FETCH' }
//   | { type: 'FETCH_SUCCESS'; data: Data[]; per_page: number; total_pages: number; page?: number, search?: string }
//   | { type: 'FETCH_ERROR'; message: string }
//   | { type: 'CHANGE_PAGE'; page: number }
//   | { type: 'CHANGE_SEARCH'; search: string }
//   | { type: 'CHANGE_LIMIT'; limit: number };

// const reducer = (state: State, action: Action): State => {
//   return match<[State, Action], State>([state, action])
//     .with([{ type: 'idle' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
//     .with([{ type: 'loading' }, { type: 'FETCH_SUCCESS' }], ([_, action]) => ({
//       type: 'success',
//       data: action.data,
//       limit: action.per_page,
//       totalPage: action.total_pages,
//       page: action.page,
//     }))
//     .with([{ type: 'loading' }, { type: 'FETCH_ERROR' }], ([_, action]) => ({
//       type: 'error',
//       error: action.message,
//     }))
//     .with([{ type: 'error' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
//     .with([{ type: 'success' }, { type: 'FETCH' }], () => ({ type: 'loading' }))
//     .with([{ type: 'success' }, { type: 'CHANGE_PAGE' }], ([_, action]) => ({
//       type: 'loading',
//       page: action.page,
//       limit: state.type === 'success' ? state.limit : 10,
//       totalPage: state.type === 'success' ? state.totalPage : 1,
//     }))
//     .with([{ type: 'success' }, { type: 'CHANGE_SEARCH' }], ([_, action]) => ({
//       type: 'loading',
//       search: action.search,
//       totalPage: state.type === 'success' ? state.totalPage : 1,
//     }))
//     .with([{ type: 'success' }, { type: 'CHANGE_LIMIT' }], ([_, action]) => ({
//       type: 'loading',
//       limit: action.limit,
//       totalPage: state.type === 'success' ? state.totalPage : 1,
//     }))
//     .otherwise(() => state);
// };

// const onChange = (state: State, dispatch: (action: Action) => void) => {
//   match(state)
//     .with({ type: 'idle' }, () => dispatch({ type: 'FETCH' }))
//     .with({ type: 'loading' }, (action) => {
//       Axios.get('/product', {
//         params: {
//           page: action.page ?? 1,
//           limit: action.limit ?? 10,
//           cari: action.search ?? '',
//         }
//       })
//         .then((res) => {
//           dispatch({
//             type: 'FETCH_SUCCESS',
//             data: res.data.data,
//             per_page: res.data.per_page,
//             total_pages: res.data.total_pages,
//             page: action.page,
//             search: action.search,
//           });
//         })
//         .catch((err) => {
//           dispatch({ type: 'FETCH_ERROR', message: err.message });
//         });
//     })
//     .otherwise(() => null);
// }

// const initialState: State = { type: 'idle' };

// export const useProductMachine = () => {
//   const [state, dispatch] = React.useReducer(
//     reducer,
//     initialState
//   );

//   React.useEffect(() => {
//     onChange(state, dispatch);
//   }, [state]);

//   return [state, dispatch] as const;
// }
export const test = "test"