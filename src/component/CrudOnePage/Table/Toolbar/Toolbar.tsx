import { Flex } from "@chakra-ui/react"
import { Pagination } from "../Display/Pagination"
import * as React from "react"
import { TableContext } from "../Table.Context"

interface CardToolbarProps {
  children?: React.ReactNode
  pagination?: boolean
}

export const Toolbar = ({ children, pagination = true }: CardToolbarProps) => {
  const tableContext = React.useContext(TableContext)
  return (
    <Flex justifyContent='space-between'>
      <Flex gap={3}>
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