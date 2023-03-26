import { AppToolbar, ColumnTableProps, CreateButton, CrudOnePage, Table } from "@/component";
import { match } from "ts-pattern";
import { useExploreMachine } from "./explore.machine";

const column: ColumnTableProps[] = [
  { key: "no" },
  { key: "title" },
  { key: "price" },
];

export function Explore() {
  const [state] = useExploreMachine();

  const data = match(state)
    .with({ type: "success" }, (state) => state.data)
    .otherwise(() => []);

  const loading = match(state).with({ type: "loading" }, () => true).otherwise(() => false);

  return (
    <CrudOnePage pageTitle="Explore">
      <AppToolbar>
        <CreateButton />
      </AppToolbar>

      <Table.Container columns={column} data={data} loading={loading}>
        <Table.Display />
      </Table.Container>
    </CrudOnePage>
  );
}