import { Th, Thead as ChakraThead, Tr } from "@chakra-ui/react"
import { ColumnTable } from "./Table"
import { formatTableColumns } from "./Table.utils"

type TheadProps = {
  columns: ColumnTable[]
}

export const Thead = ({ columns }: TheadProps) => {
  return (
    <ChakraThead>
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