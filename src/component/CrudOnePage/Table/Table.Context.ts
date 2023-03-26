import { createContext } from "react";

export interface ITableContext {
  loading: boolean;
  columns: any[];
  data: any[];
}

export const TableContext = createContext<ITableContext>({
  loading: false,
  columns: [],
  data: [],
});