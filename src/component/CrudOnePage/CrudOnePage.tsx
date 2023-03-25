import { Box, Card, CardBody, useDisclosure } from "@chakra-ui/react"
import { Modal } from "../Modal"
import { ColumnTableProps, Table } from "../Table"
import { AppToolbar } from "./CrudOnePage.AppToolbar"

interface CrudOnePageProps {
  showCreateButton?: boolean
  pageTitle: string
  columns: ColumnTableProps[]
  data: Array<Record<string, any>>
  isLoading?: boolean
  isError?: boolean
}

export const CrudOnePage = ({ showCreateButton = true, ...props }: CrudOnePageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        title="Create"
        isOpen={isOpen}
        onClose={onClose}
        onOverlayClick={onClose}
      >
        Test
      </Modal>
    </>
  )
}