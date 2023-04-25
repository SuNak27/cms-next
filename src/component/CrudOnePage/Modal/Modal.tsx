import { Button, Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import { Formik, Form } from "formik";
import { FormikValues } from "formik";
import { FormikProps } from "formik/dist/types";

import * as React from "react"
import { match } from "ts-pattern";
import { CrudOnePageContext } from "../CrudOnePage.Context";
import { useCrudOnePageMachine } from "../CrudOnePage.Machine";

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
  const [state, dispatch] = useCrudOnePageMachine();
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
    match(state)
      .with({ type: 'creating' }, () => dispatch({ type: 'CREATED', payload: values }))
      .with({ type: 'updating' }, () => dispatch({ type: 'UPDATED', payload: values }))
      .otherwise(() => console.log('No match'))
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
            alert(JSON.stringify(values, null, 2));
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