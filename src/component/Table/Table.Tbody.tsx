import { Flex, Spinner, Tbody as ChakraTbody, Td, Text, Tr } from "@chakra-ui/react"
import { ColumnTable } from "./Table"
import { createNoColumn } from "./Table.utils"

interface TBodyProps {
  data: Array<Record<string, any>>
  columns: ColumnTable[]
  isLoading?: boolean
  isError?: boolean
  emptyText?: string
}

export const TBody = ({ data, columns, isLoading, emptyText = 'No Data' }: TBodyProps) => {
  data = columns.find(column => column.key === 'no') ? createNoColumn(data) : data;
  return (
    <ChakraTbody>
      {isLoading && (
        <Tr>
          <Td colSpan={columns.length}>
            <Flex justifyContent={'center'}>
              <Spinner />
              <Text ml={2}>Loading...</Text>
            </Flex>
          </Td>
        </Tr>
      )}
      {!isLoading && data.length === 0 && (
        <Tr>
          <Td colSpan={columns.length}>
            <Flex justifyContent={'center'}>
              <Text>{emptyText}</Text>
            </Flex>
          </Td>
        </Tr>
      )}
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