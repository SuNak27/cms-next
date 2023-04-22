import { useDebounce } from "@/utils/debounce";
import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import * as React from "react";
import { FiSearch } from "react-icons/fi";
import { TableContext } from "../Table.Context";

export const Search = () => {
  const tableContext = React.useContext(TableContext);
  const [valueDebounce, setValueDebounce] = React.useState(tableContext.search || "");
  const searchQuery = useDebounce(valueDebounce, 500)

  const onChangeDebounce = (value: string) => {
    setValueDebounce(value);
  };

  React.useEffect(() => {
    if (searchQuery === valueDebounce || searchQuery === "") searchCharacter();
    async function searchCharacter() {
      tableContext.onChangeSearch(searchQuery);
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
          value={tableContext.search || valueDebounce}
          placeholder="Search"
          onChange={(e) => onChangeDebounce(e.target.value)}
        />
      </InputGroup>
    </HStack>
  );
};