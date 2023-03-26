import { CircularProgress, Flex, Tbody as ChakraTbody, Td, Text, Tr } from "@chakra-ui/react"
import { Component } from "react"
import { ColumnTableProps } from "../types"

interface BodyProps {
  data: Array<Record<string, any>>
  columns: ColumnTableProps[]
  backgroundColor?: string
  color?: string
  isLoading?: boolean
  isError?: boolean
  emptyText?: string
}

export class Body extends Component<BodyProps> {

  public createNoColumn = (data: Array<Record<string, any>>) => {
    return data.map((item, index) => ({
      ...item,
      no: index + 1
    }))
  }

  public renderRow = () => {
    const data = this.props.columns.find(column => column.key === 'no')
      ? this.createNoColumn(this.props.data)
      : this.props.data;

    return data.map((item, index) => (
      <Tr key={index}
        _hover={{
          bg: this.props.backgroundColor,
          cursor: 'pointer',
          color: this.props.color
        }}
      >
        {this.props.columns.map((column, index) => (
          column.key !== 'id' &&
          <Td key={index}
            w={column.key === 'no' ? '5%' : 'auto'}
          >{item[column.key]}</Td>
        ))}
      </Tr>
    ))

  }


  render() {
    return (
      <ChakraTbody>
        {this.props.isLoading && (
          <Tr>
            <Td colSpan={this.props.columns.length}>
              <Flex justifyContent={'center'}>
                <CircularProgress isIndeterminate color='green.300' size={6} />
                <Text ml={2}>Loading...</Text>
              </Flex>
            </Td>
          </Tr>
        )}
        {!this.props.isLoading && this.props.data.length === 0 && (
          <Tr>
            <Td colSpan={this.props.columns.length}>
              <Flex justifyContent={'center'}>
                <Text>{this.props.emptyText || 'No Data'}</Text>
              </Flex>
            </Td>
          </Tr>
        )}
        {this.renderRow()}
      </ChakraTbody >
    )
  }
}