import { CircularProgress, Flex, Tbody as ChakraTbody, Td, Text, Tr } from "@chakra-ui/react"
import * as React from "react"
import { ITbodyProps } from "../types"

export class Body extends React.Component<ITbodyProps> {
  public createNoColumn = (data: Array<Record<string, any>>) => {
    let no = 1;

    if (this.props.currentPage > 1) {
      no = (this.props.currentPage * this.props.limit) - this.props.limit + 1
    }

    return data.map((item) => ({
      ...item,
      no: no++
    }))
  }

  public onRowDoubleClick = (item: Record<string, any>) => {
    this.props.onRowDoubleClick && this.props.onRowDoubleClick(item);
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
        onDoubleClick={() => this.onRowDoubleClick(item)}
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

  public emptyRow = () => {
    return (
      <Tr>
        <Td colSpan={this.props.columns.length}>
          <Flex justifyContent={'center'}>
            <Text>{this.props.emptyText || 'No Data'}</Text>
          </Flex>
        </Td>
      </Tr>
    )
  }

  public loading = () => {
    return (
      <Tr>
        <Td colSpan={this.props.columns.length}>
          <Flex justifyContent={'center'}>
            <CircularProgress isIndeterminate color='green.300' size={6} />
            <Text ml={2}>Loading...</Text>
          </Flex>
        </Td>
      </Tr>
    )
  }

  render() {
    return (
      <ChakraTbody
        border={`1px solid`}
        borderColor={this.props.borderColor}
        borderRadius={'lg'}
      >
        {this.props.isLoading && this.loading()}
        {!this.props.isLoading && this.props.data.length === 0 && this.emptyRow()}
        {this.renderRow()}
      </ChakraTbody>
    )
  }
}