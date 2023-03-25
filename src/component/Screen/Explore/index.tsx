import { ColumnTableProps, CrudOnePage } from "@/component";
import { match } from "ts-pattern";
import { useExploreMachine } from "./explore.machine";

const column: ColumnTableProps[] = [
  { key: "no" },
  { key: "title" },
  { key: "price" },
];

export function Explore() {
  const [state] = useExploreMachine();
  return (
    <CrudOnePage
      columns={column}
      data={
        match(state)
          .with({ type: 'success' }, (state) => state.data)
          .otherwise(() => [])
      }
      pageTitle="Explore"
      isLoading={match(state).with({ type: 'loading' }, () => true).otherwise(() => false)}
      isError={match(state).with({ type: 'error' }, () => true).otherwise(() => false)}
    />
  );
}