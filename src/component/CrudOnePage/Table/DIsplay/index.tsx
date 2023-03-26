import { Table as ChakraTable, useColorModeValue } from "@chakra-ui/react"
import { TableContainer } from "@chakra-ui/react"
import { useContext } from "react"
import { TableContext } from "../Table.Context"
import { Body } from "./Body"
import { Header } from "./Header"

export const Display: React.FC = () => {
  const tableContext = useContext(TableContext)
  const bodyBackgroundColor = useColorModeValue('gray.200', 'gray.600')
  const bodyColor = useColorModeValue('gray', 'gray.300')
  const headerBorderColor = useColorModeValue('gray.200', 'gray.500')
  const headerColor = useColorModeValue('gray.600', 'gray.300')
  return (
    <TableContainer py={5}>
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
        />
      </ChakraTable>
    </TableContainer>
  )
}
