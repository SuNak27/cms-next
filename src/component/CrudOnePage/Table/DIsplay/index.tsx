import { Card, Flex, Table as ChakraTable, useColorModeValue } from "@chakra-ui/react"
import { TableContainer } from "@chakra-ui/react"
import { useContext } from "react"
import { TableContext } from "../Table.Context"
import { Body } from "./Body"
import { Header } from "./Header"
import { Pagination } from "./Pagination"
import { Search } from "./Search"

export const Display: React.FC = () => {
  const tableContext = useContext(TableContext)
  const bodyBackgroundColor = useColorModeValue('gray.200', 'gray.600')
  const bodyBorderColor = useColorModeValue('gray.200', 'gray.600')
  const bodyColor = useColorModeValue('gray', 'gray.300')
  const headerBorderColor = useColorModeValue('gray.200', 'gray.500')
  const headerColor = useColorModeValue('gray.600', 'gray.300')
  return (
    <>
      <Flex justifyContent='space-between'>
        <Search
          value={tableContext.search || ''}
          onChange={tableContext.onChangeSearch || (() => { })}
        />
        <Pagination
          totalPage={tableContext.totalPage || 1}
          currentPage={tableContext.currentPage || 1}
          onChange={tableContext.onChangePage || (() => { })}
        />
      </Flex>
      <Card overflow={'hidden'} rounded={'lg'}>
        <TableContainer>
          <ChakraTable variant='unstyled' colorScheme={useColorModeValue("gray", "whiteAlpha")}>
            <Header
              columns={tableContext.columns}
              borderColor={headerBorderColor}
              color={headerColor}
            />
            <Body
              data={tableContext.data}
              columns={tableContext.columns}
              backgroundColor={bodyBackgroundColor}
              color={bodyColor}
              isLoading={tableContext.loading}
              borderColor={bodyBorderColor}
              currentPage={tableContext.currentPage}
              limit={tableContext.limit}
            />
          </ChakraTable>
        </TableContainer>
      </Card>

      <Flex justifyContent='center'>
        <Pagination
          totalPage={tableContext.totalPage || 1}
          currentPage={tableContext.currentPage || 1}
          onChange={tableContext.onChangePage || (() => { })}
        />
      </Flex>

    </>
  )
}
