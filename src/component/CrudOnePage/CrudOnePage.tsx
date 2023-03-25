import { Box, Card, CardBody, useDisclosure } from "@chakra-ui/react"
import { ReactElement } from "react"
import { Modal } from "../Modal"
import { ColumnTableProps, Table } from "../Table"
import { AppToolbar } from "./CrudOnePage.AppToolbar"
import { ModalBody } from "./CrudOnePage.ModalBody"

interface CrudOnePageProps {
  showCreateButton?: boolean
  pageTitle: string
  columns: ColumnTableProps[]
  data: Array<Record<string, any>>
  isLoading?: boolean
  isError?: boolean
  modalTitle?: string
  detailModal?: (props: any) => ReactElement
  formKey: Record<string, any>
  onSubmit: (data: Record<string, any>) => void
}

export const CrudOnePage = ({ showCreateButton = true, ...props }: CrudOnePageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalTitle = () => {
    return "Create " + props.pageTitle
  }

  return (
    <>
      <Box>
        <AppToolbar pageTitle={props.pageTitle} showCreateButton={showCreateButton} onCreateClick={onOpen} />

        <Box mt={5}>
          <Card>
            <CardBody py={2}>
              <Table
                data={props.data}
                columns={props.columns}
                isLoading={props.isLoading}
                isError={props.isError}
                emptytext="No Data"
              />
            </CardBody>
          </Card>
        </Box>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onOverlayClick={onClose}
        title={modalTitle()}
        showModalFooter={false}
      >
        <ModalBody
          onClose={onClose}
          formKey={props.formKey}
          modalBody={props.detailModal}
          onSubmit={props.onSubmit} />
      </Modal>
    </>
  )
}