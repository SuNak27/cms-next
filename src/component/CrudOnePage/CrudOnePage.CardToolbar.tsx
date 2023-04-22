import { Flex } from "@chakra-ui/react"
import { Pagination } from "./Table/Display/Pagination"
import * as React from "react"
import { TableContext } from "./Table/Table.Context"

interface CardToolbarProps {
  children?: React.ReactNode
  pagination?: boolean
}

export const CardToolbar = ({ children, pagination = true }: CardToolbarProps) => {
  const tableContext = React.useContext(TableContext)
  return (
    <Flex justifyContent='space-between'>
      <Flex gap={3}>
        {/* <Search
          value={tableContext.search || ''}
          onChange={tableContext.onChangeSearch || (() => { })}
        />
        <Limit value={tableContext.limit || 1} onChange={tableContext.onChangeLimit || (() => { })} /> */}
        {children}
      </Flex>
      {pagination ? <Pagination
        totalPage={tableContext.totalPage || 1}
        currentPage={tableContext.currentPage || 1}
        onChange={tableContext.onChangePage || (() => { })}
      /> : null}
    </Flex>
  )
}