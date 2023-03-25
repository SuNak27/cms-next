import { Flex, Spinner, Tbody as ChakraTbody, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react"
import { ColumnTableProps } from "./Table"
import { createNoColumn } from "./Table.utils"

interface TBodyProps {
  data: Array<Record<string, any>>
  columns: ColumnTableProps[]
  isLoading?: boolean
  isError?: boolean
  emptyText?: string
}

export const TBody = ({ data, columns, isLoading, emptyText = 'No Data' }: TBodyProps) => {
  data = columns.find(column => column.key === 'no') ? createNoColumn(data) : data;
  const bg = useColorModeValue('gray.200', 'gray.600')
  const color = useColorModeValue('gray', 'gray.300')
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
        <Tr key={index}
          _hover={{
            bg: bg,
            cursor: 'pointer',
            color: color
          }}
        >
          {columns.map((column, index) => (
            column.key !== 'id' &&
            <Td key={index}
              w={column.key === 'no' ? '5%' : 'auto'}
            >{item[column.key]}</Td>
          ))}
        </Tr>
      ))
      }
    </ChakraTbody >
  )
}