import { Button, Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import { Formik, Form } from "formik";

import * as React from "react"
import { CrudOnePageContext } from "../CrudOnePage.Context";

interface ModalProps {
  children: any
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  initialValues?: any
}

export function Modal({ size = 'md', children, initialValues }: ModalProps) {
  const crudContext = React.useContext(CrudOnePageContext);
  const { isOpen, onClose } = crudContext.onCreateClick;

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
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