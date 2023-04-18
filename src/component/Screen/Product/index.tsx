import { AppToolbar, ColumnTableProps, CreateButton, CrudOnePage, Table } from "@/component";
import { match } from "ts-pattern";
import { useProductMachine } from "./product.machine";

const column: ColumnTableProps[] = [
  { key: "no" },
  { key: "name" }
];

export function Product() {
  const [state, dispatch] = useProductMachine();

  const data = match(state)
    .with({ type: "success" }, (state) => state.data)
    .otherwise(() => []);

  const total = match(state)
    .with({ type: "success" }, (state) => state.totalPage)
    .with({ type: "loading" }, (state) => state.totalPage ?? 1)
    .otherwise(() => 1);

  const limit = match(state)
    .with({ type: "success" }, (state) => state.limit)
    .otherwise(() => 1);

  const loading = match(state).with({ type: "loading" }, () => true).otherwise(() => false);

  const onChangePage = (page: number) => {
    match(state)
      .with({ type: "success" }, () => dispatch({ type: "CHANGE_PAGE", page }))
      .otherwise(() => { });
  };

  const currentPage = match(state)
    .with({ type: "success" }, (state) => state.page)
    .with({ type: "loading" }, (state) => state.page ?? 1)
    .otherwise(() => 1);

  const search = match(state)
    .with({ type: "success" }, (state) => state.search)
    .otherwise(() => "");

  const onChangeSearch = (search: string) => {
    console.log(search);

    match(state)
      .with({ type: "success" }, () => dispatch({ type: "CHANGE_SEARCH", search }))
      .otherwise(() => { });
  };

  return (
    <CrudOnePage pageTitle="Product">
      <AppToolbar>
        <CreateButton />
      </AppToolbar>

      <Table.Container
        columns={column}
        data={data}
        loading={loading}
        totalPage={total}
        limit={limit}
        onChangePage={(page) => onChangePage(page)}
        currentPage={currentPage}
        search={search}
        onChangeSearch={(search) => onChangeSearch(search)}
      >
        <Table.Display />
      </Table.Container>
    </CrudOnePage>
  );
}