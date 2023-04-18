import { Box, Card, CardBody } from "@chakra-ui/react"
import React from "react"
import { ITableContext, TableContext } from "./Table.Context"
import { ColumnTableProps } from "./types"

interface TableProps {
  loading?: boolean
  children?: React.ReactNode
  data?: Array<Record<string, any>>
  columns?: ColumnTableProps[]
  totalPage: number
  limit?: number
  currentPage?: number
  onChangePage?: (page: number) => void
  search?: string
  onChangeSearch?: (search: string) => void
}

export const Container: React.FC<TableProps> = props => {
  const TableContextValue: ITableContext = {
    data: props.data || [],
    columns: props.columns || [],
    loading: props.loading || false,
    totalPage: props.totalPage,
    limit: props.limit || 1,
    currentPage: props.currentPage || 1,
    onChangePage: props.onChangePage || (() => { }),
    search: props.search || "",
    onChangeSearch: props.onChangeSearch || (() => { }),
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

