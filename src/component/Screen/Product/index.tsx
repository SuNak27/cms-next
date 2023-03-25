import { ColumnTableProps, CrudOnePage } from "@/component";
import { useState } from "react";
import { match } from "ts-pattern";
import { detailModal } from "./product.detailModal";
import { useExploreMachine } from "./product.machine";

const column: ColumnTableProps[] = [
  { key: "no" },
  { key: "name" },
  { key: "description" },
];

export function Product() {
  const [state, dispatch] = useExploreMachine();
  const [formKey, _] = useState({
    id: '',
    name: '',
    description: '',
  });

  const isLoading = match(state)
    .with({ type: 'loading' }, () => true)
    .with({ type: 'submitting' }, () => true)
    .otherwise(() => false);

  const isError = match(state)
    .with({ type: 'error' }, () => true)
    .with({ type: 'submitError' }, () => true)
    .otherwise(() => false);

  return (
    <CrudOnePage
      columns={column}
      data={
        match(state)
          .with({ type: 'success' }, (state) => state.data)
          .otherwise(() => [])
      }
      pageTitle="Product"
      modalTitle="Product"
      isLoading={isLoading}
      isError={isError}
      formKey={formKey}
      detailModal={detailModal}
      onSubmit={(values) => {
        dispatch({ type: 'SUBMIT', data: values });
      }}
    />
  );
}