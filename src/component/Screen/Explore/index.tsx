import { CrudOnePage } from "@/component";
import { ColumnTable } from "@/component/Table";
import { Box } from "@chakra-ui/react";
import { match } from "ts-pattern";
import { useExploreMachine } from "./explore.machine";

const column: ColumnTable[] = [
  { key: "name", label: "Name" },
];

export function Explore() {
  const [state] = useExploreMachine();

  const renderView = () => {
    return match(state)
      .with({ type: 'idle' }, { type: 'loading' }, () => (
        <Box>Loading...</Box>
      ))
      .with({ type: 'error' }, () => (
        <Box>Error</Box>
      ))
      .with({ type: 'success' }, (state) => {
        return state.data.length > 0 ? (
          <CrudOnePage
            columns={column}
            data={state.data}
            pageTitle="Explore"
          />
        ) : (
          <Box>No data</Box>
        );
      })
      .otherwise(() => null);
  };

  return (
    <Box>
      {renderView()}
    </Box>
  );
}