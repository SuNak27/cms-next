import { Card, Flex, Table as ChakraTable, useColorModeValue } from "@chakra-ui/react"
import { TableContainer } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { FiEdit3, FiTrash2 } from "react-icons/fi"
import Swal from "sweetalert2"
import { CrudOnePageContext } from "../../CrudOnePage.Context"
import { ContextMenu, ContextMenuItem, ContextMenuList, ContextMenuTrigger } from "../ContextMenu"
import { TableContext } from "../Table.Context"
import { Body } from "./Body"
import { Header } from "./Header"
import { Pagination } from "./Pagination"

export const Display: React.FC = () => {
  const [state, setState] = useState<any>({})
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

  const onContextMenu = () => {
    dispatch({ type: "UPDATE", payload: state })
    modal.onOpen()
  }

  const deleteData = () => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Tidak, batalkan!",
      reverseButtons: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "DELETE", payload: state })
      }
    })
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
                  onContextMenu={(item: any) => setState(item)}
                />
              </ContextMenuTrigger>
            </ChakraTable>
          </TableContainer>

          <ContextMenuList>
            <ContextMenuItem onClick={onContextMenu} icon={<FiEdit3 />} colorScheme={'blue'}>
              Edit
            </ContextMenuItem>
            <ContextMenuItem onClick={deleteData} icon={<FiTrash2 />} colorScheme={'red'}>
              Delete
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
