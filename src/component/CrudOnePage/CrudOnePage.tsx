import { Box, Card, CardBody } from "@chakra-ui/react"
import { ColumnTable, Table } from "../Table"
import { AppToolbar } from "./CrudOnePage.AppToolbar"

interface CrudOnePageProps {
  showCreateButton?: boolean
  pageTitle: string
  columns: ColumnTable[]
  data: Array<Record<string, any>>
  isLoading?: boolean
  isError?: boolean
}

export const CrudOnePage = ({ showCreateButton = true, ...props }: CrudOnePageProps) => {
  return (
    <Box>
      <AppToolbar pageTitle={props.pageTitle} showCreateButton={showCreateButton} />
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
  )
}