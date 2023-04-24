import {
  AppToolbar,
  ColumnTableProps,
  CreateButton,
  CrudOnePage,
  Table,
  Limit,
  Search,
  Modal
} from "@/component";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FormikProps } from "formik/dist/types";

const column: ColumnTableProps[] = [
  { key: "no" },
  { key: "name" }
];

export default function Product() {
  return (
    <CrudOnePage pageTitle="Product" apiUrl='/product'>

      <Modal
        initialValues={{ name: '' }}
      >
        {({ values, handleChange }: FormikProps<any>) => (
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input value={values.name} onChange={handleChange('name')} />
          </FormControl>
        )}
      </Modal>

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
    </CrudOnePage >
  );
}