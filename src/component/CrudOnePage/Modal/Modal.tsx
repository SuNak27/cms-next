import { Button, Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Spinner } from "@chakra-ui/react"
import { match } from "ts-pattern";
import { Formik, Form } from "formik";
import { FormikValues } from "formik";
import { FormikProps } from "formik/dist/types";

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
}

export function Modal({ size = 'md', children, initialValues, formKeys, modalTitle = '' }: ModalProps) {
  const crudContext = React.useContext(CrudOnePageContext);
  const { isOpen, onClose } = crudContext.onCreateClick;

  if (formKeys && initialValues) {
    formKeys.forEach(key => {
      if (!initialValues[key]) {
        initialValues[key] = ''
      }
    })
  }

  const title = () => {
    if (crudContext.onCreateClick.isOpen) {
      return 'Create'
    }
    //  else if (crudContext.onUpdateClick.isOpen) {
    //   return 'Update'
    // }
  }

  const onSubmit = (values: FormikValues) => {
    match(crudContext.state.type)
      .with('creating', () => {
        crudContext.dispatch({ type: 'CREATE_DATA', payload: values })
      })
      .otherwise(() => { })
  }

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
            // alert(JSON.stringify(values, null, 2));
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ values, handleChange }: FormikProps<any>) => (
            <Form>
              <ModalContent>
                <ModalHeader>{`${title()} ${modalTitle}`}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {typeof children === 'function' ? children({ values, handleChange }) : children}
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='solid' colorScheme='green' type='submit'>
                    {match(crudContext.state.type)
                      .with('creating_data', () =>
                        <Spinner size={"sm"} />
                      )
                      .otherwise(() => 'Save')}
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