import { Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { Button } from '../Button';

interface ModalProps extends React.ComponentProps<typeof ChakraModal> {
  title?: string;
  modalFooter?: React.ReactNode;
  showModalFooter?: boolean;
}


export const Modal = (props: ModalProps) => {
  const { children, title, isOpen, onClose, showModalFooter = true, ...rest } = props;

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} onOverlayClick={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>

        {showModalFooter ? (
          rest.modalFooter ?? (
            <ModalFooter>
              <Button variant='danger' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='success'>Save</Button>
            </ModalFooter>
          )
        ) : null}
      </ModalContent>
    </ChakraModal>
  );
};