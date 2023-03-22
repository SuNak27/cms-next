import { Box } from "@chakra-ui/react"
import { AppToolbar } from "./CrudOnePage.AppToolbar"

interface CrudOnePageProps {
  noCreateButton?: boolean
  pageTitle: string
}

export const CrudOnePage = (props: CrudOnePageProps) => {
  return (
    <Box>
      <AppToolbar pageTitle={props.pageTitle} noCreateButton={props.noCreateButton} />
    </Box>
  )
}