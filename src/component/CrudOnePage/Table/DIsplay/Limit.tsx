import { HStack, Select } from "@chakra-ui/react";
import * as React from "react";
import { TableContext } from "../Table.Context";

export const Limit = () => {
  const tableContext = React.useContext(TableContext);
  const onChangeDebounce = (value: number) => {
    tableContext.onChangeLimit && tableContext.onChangeLimit(value);
  };

  return (
    <HStack>
      <Select value={tableContext.limit} onChange={(e) => onChangeDebounce(Number(e.target.value))}>
        {
          [10, 20, 50, 100].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        }
      </Select>
    </HStack >
  );
};