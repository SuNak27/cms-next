import { Th, Thead as ChakraThead, Tr } from "@chakra-ui/react"
import { Component } from "react"
import { ITheadProps } from "../types"

export class Header extends Component<ITheadProps> {
  public formatTableColumns = (key: string) => {
    return key.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

  render() {
    return (
      <ChakraThead
        sx={{
          '& > tr > th': {
            fontWeight: 'bold',
            backgroundColor: this.props.borderColor,
            fontSize: 'sm',
            color: this.props.color,
          }
        }}
      >
        <Tr>
          {this.props.columns.map((column, index) => (
            column.key !== 'id' &&
            <Th key={index} textTransform={'capitalize'}
              w={column.key === 'no' ? '5%' : 'auto'}
            >
              {column.label ?? this.formatTableColumns(column.key)}
            </Th>
          ))}
        </Tr>
      </ChakraThead>
    )
  }
}