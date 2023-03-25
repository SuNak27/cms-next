import { Box, ModalFooter } from "@chakra-ui/react";
import { Formik, } from "formik";
import { ReactElement } from "react";
import { Button } from "../Button";

type CrudModalBodyProps = {
  onClose: () => void;
  onSubmit: (values: Record<string, any>) => void;
  formKey: Record<string, any>;
  modalBody?: (props: any) => ReactElement;
};

export const ModalBody = ({ onClose, formKey, modalBody, onSubmit }: CrudModalBodyProps) => {

  return (
    <Formik
      initialValues={formKey}
      // validate={values => {
      //   const errors: Record<string, string> = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
        onClose();
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit}>
          {modalBody ? (
            modalBody({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
            })
          ) : (
            <Box>Modal Body</Box>
          )}
          <ModalFooter px={0}>
            <Button variant='danger' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='success' onClick={handleSubmit} disabled={isSubmitting}>Save</Button>
          </ModalFooter>
        </form>
      )}
    </Formik>
  );
};