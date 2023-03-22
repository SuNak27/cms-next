import { Box } from "@chakra-ui/react"
import { AppToolbar } from "./CrudOnePage.AppToolbar"

interface CrudOnePageProps {
  showCreateButton?: boolean
  pageTitle: string
}

export const CrudOnePage = ({ showCreateButton = true, pageTitle }: CrudOnePageProps) => {
  return (
    <Box>
      <AppToolbar pageTitle={pageTitle} showCreateButton={showCreateButton} />
    </Box>
  )
}