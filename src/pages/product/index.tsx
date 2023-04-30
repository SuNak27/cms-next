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
import { Flex, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { FormikProps } from "formik/dist/types";
import * as Yup from "yup";

const column: ColumnTableProps[] = [
  { key: "no" },
  { key: "name" }
];

interface FormValue {
  name: string
  description: string
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required')
})

export default function Product() {
  return (
    <CrudOnePage pageTitle="Product" apiUrl='/product'>
      <Modal formKeys={['name', 'description']} modalTitle='Product' validationSchema={validationSchema}>
        {({ values, handleChange, errors, touched }: FormikProps<FormValue>) => (
          <Flex
            direction="column"
            gap={5}
          >
            <FormControl isInvalid={!!errors.name && touched.name}>
              <FormLabel>First Name</FormLabel>
              <Input value={values.name} onChange={handleChange('name')} />
              {errors.name && touched.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
            </FormControl>

            <FormControl isInvalid={!!errors.description && touched.description}>
              <FormLabel>Description</FormLabel>
              <Input value={values.description} onChange={handleChange('description')} />
              {errors.description && touched.description && <FormErrorMessage>{errors.description}</FormErrorMessage>}
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