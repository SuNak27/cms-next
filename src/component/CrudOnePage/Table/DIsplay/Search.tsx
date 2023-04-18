import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import * as React from "react";
import { FiSearch } from "react-icons/fi";

interface ISearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const Search = ({ value, onChange }: ISearchProps) => {
  const [search, setSearch] = React.useState(value);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch();
  };

  const onSearch = React.useCallback(() => {
    const timeout = setTimeout(() => {
      onChange(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [onChange, search]);

  React.useEffect(() => {
    setSearch(value);
  }, [value]);

  return (
    <HStack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder="Search"
        />
      </InputGroup>
    </HStack>
  );
};