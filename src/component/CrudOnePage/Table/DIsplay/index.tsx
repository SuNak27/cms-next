import { Card, Divider, Flex, Table as ChakraTable, useColorModeValue } from "@chakra-ui/react"
import { TableContainer } from "@chakra-ui/react"
import { useContext } from "react"
import { CrudOnePageContext } from "../../CrudOnePage.Context"
import { ContextMenu, ContextMenuItem, ContextMenuList, ContextMenuTrigger } from "../ContextMenu"
import { TableContext } from "../Table.Context"
import { Body } from "./Body"
import { Header } from "./Header"
import { Pagination } from "./Pagination"

export const Display: React.FC = () => {
  const tableContext = useContext(TableContext)
  const { dispatch, modal } = useContext(CrudOnePageContext)
  const bodyBackgroundColor = useColorModeValue('gray.200', 'gray.600')
  const bodyBorderColor = useColorModeValue('gray.200', 'gray.600')
  const bodyColor = useColorModeValue('gray', 'gray.300')
  const headerBorderColor = useColorModeValue('gray.200', 'gray.500')
  const headerColor = useColorModeValue('gray.600', 'gray.300')

  const onRowDoubleClick = (row: any) => {
    dispatch({ type: "UPDATE", payload: row })
    modal.onOpen()
  }

  return (
    <>
      <Card overflow={'hidden'} rounded={'lg'}>
        <ContextMenu>
          <TableContainer>
            <ChakraTable variant='unstyled' colorScheme={useColorModeValue("gray", "whiteAlpha")}>
              <Header
                columns={tableContext.columns}
                borderColor={headerBorderColor}
                color={headerColor}
              />
              <ContextMenuTrigger borderColor={bodyBorderColor}>
                <Body
                  data={tableContext.data}
                  columns={tableContext.columns}
                  backgroundColor={bodyBackgroundColor}
                  color={bodyColor}
                  isLoading={tableContext.loading}
                  currentPage={tableContext.currentPage}
                  limit={tableContext.limit}
                  onRowDoubleClick={onRowDoubleClick}
                />
              </ContextMenuTrigger>
            </ChakraTable>
          </TableContainer>

          <ContextMenuList>
            <ContextMenuItem onClick={() => console.log("Option 1")}>
              Option 1
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => console.log("Option 2")}
              colorScheme="red"
            >
              Option 2
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => console.log("Option 3")}
              colorScheme="blue"
            >
              Option 3
            </ContextMenuItem>
            <Divider />
            <ContextMenuItem onClick={() => console.log("Option 4")} disabled>
              Disabled
            </ContextMenuItem>
          </ContextMenuList>
        </ContextMenu>
      </Card>

      <Flex justifyContent='center' flexWrap={'wrap'}>
        <Pagination
          totalPage={tableContext.totalPage || 1}
          currentPage={tableContext.currentPage || 1}
          onChange={tableContext.onChangePage || (() => { })}
        />
      </Flex>

    </>
  )
}
