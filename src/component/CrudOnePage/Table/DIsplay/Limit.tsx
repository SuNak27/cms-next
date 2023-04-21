import { HStack, Select } from "@chakra-ui/react";
import * as React from "react";

export interface ILimitProps {
  value: number;
  onChange: (value: number) => void;
}

export const Limit = ({ value, onChange }: ILimitProps) => {
  const onChangeDebounce = (value: number) => {
    onChange(value);
  };

  return (
    <HStack>
      <Select value={value} onChange={(e) => onChangeDebounce(Number(e.target.value))}>
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