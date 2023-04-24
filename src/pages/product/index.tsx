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
import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FormikProps } from "formik/dist/types";

const column: ColumnTableProps[] = [
  { key: "no" },
  { key: "name" }
];

interface FormValue {
  name: string
  description: string
}


export default function Product() {
  return (
    <CrudOnePage pageTitle="Product" apiUrl='/product'>
      <Modal formKeys={['name', 'description']} modalTitle='Product'>
        {({ values, handleChange }: FormikProps<FormValue>) => (
          <Flex
            direction="column"
            gap={5}
          >
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input value={values.name} onChange={handleChange('name')} />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input value={values.description} onChange={handleChange('description')} />
            </FormControl>
          </Flex>
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