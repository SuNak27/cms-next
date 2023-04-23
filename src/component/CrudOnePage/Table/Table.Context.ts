import { createContext } from "react";

export interface ITableContext {
  loading: boolean;
  columns: any[];
  data: any[];
  totalPage: number;
  limit: number;
  onChangePage: (page: number) => void;
  currentPage: number;
  search: string;
  onChangeSearch: (search: string) => void;
  onChangeLimit: (limit: number) => void;
  limitPageNumber?: number;
}

export const TableContext = createContext<ITableContext>({
  loading: false,
  columns: [],
  data: [],
  totalPage: 1,
  limit: 10,
  onChangePage: () => { },
  currentPage: 1,
  search: "",
  onChangeSearch: () => { },
  onChangeLimit: () => { },
  limitPageNumber: 4
});