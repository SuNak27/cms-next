import { Table as ChakraTable, TableContainer, useColorModeValue } from "@chakra-ui/react";
import { TBody } from "./Table.Tbody";
import { Thead } from "./Table.Thead";

export interface ColumnTable {
  key: string;
  label?: string;
}

interface TableProps {
  columns: ColumnTable[];
  data: Array<Record<string, any>>;
  isLoading?: boolean;
  isError?: boolean;
}

export const Table = ({ data, columns, isError, isLoading }: TableProps) => {
  return (
    <TableContainer py={5}>
      <ChakraTable variant='unstyled' colorScheme={useColorModeValue("gray", "whiteAlpha")}>
        <Thead columns={columns} />
        <TBody data={data} columns={columns} isLoading={isLoading} isError={isError} />
      </ChakraTable>
    </TableContainer >
  );
};