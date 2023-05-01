import { Box, Card, CardBody } from "@chakra-ui/react"
import React from "react"
import { CrudOnePageContext } from "../CrudOnePage.Context"
import { ITableContext, TableContext } from "./Table.Context"
import { ColumnTableProps } from "./types"

interface TableProps {
  children?: React.ReactNode
  columns?: ColumnTableProps[]
  limitPageNumber?: number
}

export const Container: React.FC<TableProps> = props => {
  const { state, dispatch } = React.useContext(CrudOnePageContext);

  const data = state.data ?? [];

  const totalPage = state.totalPage ?? 1;

  const limit = state.limit ?? 10;

  const loading = state.type === "fetching";

  const onChangePage = (page: number) => {
    dispatch({ type: "CHANGE_PAGE", page });
  };

  const currentPage = state.page;

  const search = state.search;

  const onChangeSearch = (search: string) => {
    dispatch({ type: "CHANGE_SEARCH", search });
  };

  const onChangeLimit = (limit: number) => {
    dispatch({ type: "CHANGE_LIMIT", limit });
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

