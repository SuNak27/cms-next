import { Th, Thead as ChakraThead, Tr, useColorModeValue } from "@chakra-ui/react"
import { ColumnTableProps } from "./Table"
import { formatTableColumns } from "./Table.utils"

type TheadProps = {
  columns: ColumnTableProps[]
}

export const Thead = ({ columns }: TheadProps) => {
  return (
    <ChakraThead
      sx={{
        '& > tr > th': {
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.500'),
          fontWeight: 'bold',
          fontSize: 'sm',
          color: useColorModeValue('gray.600', 'gray.300'),
        }
      }}
    >
      <Tr>
        {columns.map((column, index) => (
          column.key !== 'id' &&
          <Th key={index} textTransform={'capitalize'}
            w={column.key === 'no' ? '5%' : 'auto'}
          >
            {column.label ?? formatTableColumns(column.key)}
          </Th>
        ))}
      </Tr>
    </ChakraThead>
  )
}