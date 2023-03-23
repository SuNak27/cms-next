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
}

export const Table = ({ data, columns }: TableProps) => {
  return (
    <TableContainer py={5}>
      <ChakraTable variant='simple' colorScheme={useColorModeValue("gray", "whiteAlpha")}>
        <Thead columns={columns} />
        <TBody data={data} columns={columns} />
      </ChakraTable>
    </TableContainer >
  );
};