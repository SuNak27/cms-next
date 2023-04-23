import {
  AppToolbar,
  ColumnTableProps,
  CreateButton,
  CrudOnePage,
  Table,
  Limit,
  Search
} from "@/component";

const column: ColumnTableProps[] = [
  { key: "no" },
  { key: "name" }
];

export default function Product() {
  return (
    <CrudOnePage pageTitle="Product" apiUrl='/product'>
      <AppToolbar>
        <CreateButton />
      </AppToolbar>

      <Table.Container columns={column}>
        <Table.Toolbar>
          <Search />
          <Limit />
        </Table.Toolbar>
        <Table.Display />
      </Table.Container>
    </CrudOnePage>
  );
}