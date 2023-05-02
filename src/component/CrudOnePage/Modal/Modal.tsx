import { Button, Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import { match } from "ts-pattern";
import { Formik, Form } from "formik";
import { FormikValues } from "formik";
import { FormikProps } from "formik/dist/types";
import * as Yup from 'yup';

import * as React from "react"
import { CrudOnePageContext } from "../CrudOnePage.Context";

interface ModalProps {
  children: React.ReactNode | (({
    values,
    handleChange
  }: any) => React.ReactNode)
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  initialValues?: FormikValues
  formKeys?: string[]
  modalTitle: string
  validationSchema?: Yup.ObjectSchema<any>
}

export function Modal({ size = 'md', children, initialValues, formKeys, modalTitle = '', validationSchema }: ModalProps) {
  const crudContext = React.useContext(CrudOnePageContext);
  const isOpen = crudContext.modal.isOpen;

  const onClose = () => {
    crudContext.modal.onClose()
  }

  if (crudContext.state.type === 'updating') {
    initialValues = crudContext.state.payload
  }

  if (formKeys && initialValues) {
    formKeys.forEach(key => {
      if (initialValues) {
        initialValues[key] = crudContext.state.payload[key]
      }
    })
  }

  const title = () => {
    if (crudContext.state.type === 'creating' || crudContext.state.type === 'creating_data') {
      return 'Create'
    } else if (crudContext.state.type === 'updating' || crudContext.state.type === 'updating_data') {
      return 'Detail'
    }
  }

  const onSubmit = (values: FormikValues) => {
    match(crudContext.state.type)
      .with('creating', () => crudContext.dispatch({ type: 'CREATE_DATA', payload: values }))
      .with('updating', () => crudContext.dispatch({ type: 'UPDATE_DATA', payload: values }))
      .otherwise(() => { })
  }

  const isLoading = match(crudContext.state.type)
    .with('creating_data', () => true)
    .with('updating_data', () => true)
    .otherwise(() => false)


  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <Formik
          initialValues={
            initialValues ||
            formKeys?.reduce((acc, cur) => ({ ...acc, [cur]: '' }), {}) ||
            {}
          }
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, values, handleChange, touched }: FormikProps<any>) => (
            <Form>
              <ModalContent>
                <ModalHeader>{`${title()} ${modalTitle}`}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {typeof children === 'function' ? children({ values, handleChange, errors, touched }) : children}
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='solid' colorScheme='green' type='submit' isLoading={isLoading} loadingText={'Loading'}>
                    Save
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Form>
          )}
        </Formik>
      </ChakraModal>
    </>
  )
}