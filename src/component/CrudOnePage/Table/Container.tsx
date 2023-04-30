import { Box, Card, CardBody } from "@chakra-ui/react"
import React from "react"
import { CrudOnePageContext } from "../CrudOnePage.Context"
import { match } from "ts-pattern"
import { ITableContext, TableContext } from "./Table.Context"
import { ColumnTableProps } from "./types"

interface TableProps {
  children?: React.ReactNode
  columns?: ColumnTableProps[]
  limitPageNumber?: number
}

export const Container: React.FC<TableProps> = props => {
  const { state, dispatch } = React.useContext(CrudOnePageContext);

  const data = match(state)
    .with({ type: "success" }, (state) => state.data)
    .with({ type: "creating" }, (state) => state.data)
    .otherwise(() => []);

  const totalPage = match(state)
    .with({ type: "success" }, (state) => state.totalPage)
    .with({ type: "creating" }, (state) => state.totalPage)
    .with({ type: "loading" }, (state) => state.totalPage ?? 1)
    .otherwise(() => 1);

  const limit = match(state)
    .with({ type: "success" }, (state) => state.limit)
    .with({ type: "creating" }, (state) => state.limit)
    .with({ type: "loading" }, (state) => state.limit ?? 10)
    .otherwise(() => 1);

  const loading = match(state).with({ type: "loading" }, () => true).otherwise(() => false);

  const onChangePage = (page: number) => {
    dispatch({ type: "CHANGE_PAGE", page });
  };

  const currentPage = match(state)
    .with({ type: "success" }, (state) => state.page)
    .with({ type: "creating" }, (state) => state.page)
    .with({ type: "loading" }, (state) => state.page ?? 1)
    .otherwise(() => 1);

  const search = match(state)
    .with({ type: "success" }, (state) => state.search)
    .with({ type: "creating" }, (state) => state.search)
    .otherwise(() => "");

  const onChangeSearch = (search: string) => {
    match(state)
      .with({ type: "success" }, () => dispatch({ type: "CHANGE_SEARCH", search }))
      .with({ type: "creating" }, () => dispatch({ type: "CHANGE_SEARCH", search }))
      .otherwise(() => { });
  };

  const onChangeLimit = (limit: number) => {
    match(state)
      .with({ type: "success" }, () => dispatch({ type: "CHANGE_LIMIT", limit }))
      .with({ type: "creating" }, () => dispatch({ type: "CHANGE_LIMIT", limit }))
      .otherwise(() => { });
  };

  const TableContextValue: ITableContext = {
    data: data,
    columns: props.columns || [],
    loading: loading,
    totalPage: totalPage,
    limit: limit,
    currentPage: currentPage || 1,
    onChangePage: onChangePage || (() => { }),
    search: search || "",
    onChangeSearch: onChangeSearch || (() => { }),
    onChangeLimit: onChangeLimit || (() => { }),
    limitPageNumber: props.limitPageNumber || 4,
  };

  return (
    <TableContext.Provider value={TableContextValue}>
      <Box mt={5}>
        <Card>
          <CardBody py={2}>
            {props.children}
          </CardBody>
        </Card>
      </Box>
    </TableContext.Provider>
  )
}

