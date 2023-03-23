import { Tbody as ChakraTbody, Td, Tr } from "@chakra-ui/react"
import { ColumnTable } from "./Table"
import { createNoColumn } from "./Table.utils"

interface TBodyProps {
  data: Array<Record<string, any>>
  columns: ColumnTable[]
}

export const TBody = ({ data, columns }: TBodyProps) => {
  data = columns.find(column => column.key === 'no') ? createNoColumn(data) : data;
  return (
    <ChakraTbody>
      {data.map((item, index) => (
        <Tr key={index}>
          {columns.map((column, index) => (
            column.key !== 'id' &&
            <Td key={index}
              w={column.key === 'no' ? '5%' : 'auto'}
            >{item[column.key]}</Td>
          ))}
        </Tr>
      ))}
    </ChakraTbody>
  )
}