import { Table as ChakraTable, TableContainer, useColorModeValue } from "@chakra-ui/react";
import { TBody } from "./Table.Tbody";
import { Thead } from "./Table.Thead";

export interface ColumnTableProps {
  key: string;
  label?: string;
}

interface TableProps {
  columns: ColumnTableProps[];
  data: Array<Record<string, any>>;
  isLoading?: boolean;
  isError?: boolean;
  emptytext?: string;
}

export const Table = ({ data, columns, isError, isLoading, emptytext }: TableProps) => {
  return (
    <TableContainer py={5}>
      <ChakraTable variant='unstyled' colorScheme={useColorModeValue("gray", "whiteAlpha")}>
        <Thead columns={columns} />
        <TBody data={data} columns={columns} isLoading={isLoading} isError={isError} emptyText={emptytext} />
      </ChakraTable>
    </TableContainer >
  );
};