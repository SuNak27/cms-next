import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { FormikProps } from "formik"
import { Data } from "./product.machine"

export const detailModal = ({ errors, touched, handleChange, handleBlur, values }: FormikProps<Data>) => {
  return (
    <>
      <FormControl isInvalid={errors.name !== undefined && touched.name !== undefined} mb={4}>
        <FormLabel>Name</FormLabel>
        <Input type='text' onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          name='name'
        />
        <FormErrorMessage>
          {errors.name && touched.name && errors.name}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.description !== undefined && touched.description !== undefined}>
        <FormLabel>Description</FormLabel>
        <Input type='text' onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          name='description'
        />
        <FormErrorMessage>
          {errors.description && touched.description && errors.description}
        </FormErrorMessage>
      </FormControl>
    </>
  )
}