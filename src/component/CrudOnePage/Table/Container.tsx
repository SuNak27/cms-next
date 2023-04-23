import { Box, Card, CardBody } from "@chakra-ui/react"
import React from "react"
import { match } from "ts-pattern"
import { useCrudOnePageMachine } from "../CrudOnePage.Machine"
import { ITableContext, TableContext } from "./Table.Context"
import { ColumnTableProps } from "./types"

interface TableProps {
  children?: React.ReactNode
  columns?: ColumnTableProps[]
  limitPageNumber?: number
}

export const Container: React.FC<TableProps> = props => {
  const [state, dispatch] = useCrudOnePageMachine()

  const data = match(state)
    .with({ type: "success" }, (state) => state.data)
    .otherwise(() => []);

  const totalPage = match(state)
    .with({ type: "success" }, (state) => state.totalPage)
    .with({ type: "loading" }, (state) => state.totalPage ?? 1)
    .otherwise(() => 1);

  const limit = match(state)
    .with({ type: "success" }, (state) => state.limit)
    .with({ type: "loading" }, (state) => state.limit ?? 10)
    .otherwise(() => 1);

  const loading = match(state).with({ type: "loading" }, () => true).otherwise(() => false);

  const onChangePage = (page: number) => {
    match(state)
      .with({ type: "success" }, () => dispatch({ type: "CHANGE_PAGE", page }))
      .otherwise(() => { });
  };

  const currentPage = match(state)
    .with({ type: "success" }, (state) => state.page)
    .with({ type: "loading" }, (state) => state.page ?? 1)
    .otherwise(() => 1);

  const search = match(state)
    .with({ type: "success" }, (state) => state.search)
    .otherwise(() => "");

  const onChangeSearch = (search: string) => {
    match(state)
      .with({ type: "success" }, () => dispatch({ type: "CHANGE_SEARCH", search }))
      .otherwise(() => { });
  };

  const onChangeLimit = (limit: number) => {
    match(state)
      .with({ type: "success" }, () => dispatch({ type: "CHANGE_LIMIT", limit }))
      .otherwise(() => { });
  };

  const TableContextValue: ITableContext = {
    data: data || [],
    columns: props.columns || [],
    loading: loading || false,
    totalPage: totalPage || 1,
    limit: limit || 1,
    currentPage: currentPage || 1,
    onChangePage: onChangePage || (() => { }),
    search: search || "",
    onChangeSearch: onChangeSearch || (() => { }),
    onChangeLimit: onChangeLimit || (() => { }),
    limitPageNumber: props.limitPageNumber || 4,
  }

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

