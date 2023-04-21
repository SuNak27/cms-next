import { useDebounce } from "@/utils/debounce";
import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import * as React from "react";
import { FiSearch } from "react-icons/fi";

interface ISearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const Search = ({ value, onChange }: ISearchProps) => {
  const [valueDebounce, setValueDebounce] = React.useState(value);
  const searchQuery = useDebounce(valueDebounce, 500)

  const onChangeDebounce = (value: string) => {
    setValueDebounce(value);
  };

  React.useEffect(() => {
    if (searchQuery === valueDebounce || searchQuery === "") searchCharacter();
    async function searchCharacter() {
      onChange(searchQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <HStack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Input
          value={value || valueDebounce}
          placeholder="Search"
          onChange={(e) => onChangeDebounce(e.target.value)}
        />
      </InputGroup>
    </HStack>
  );
};