import { useDisclosure } from "@chakra-ui/react"
import { CrudOnePageContext } from "./CrudOnePage.Context"
interface CrudOnePageProps {
  pageTitle: string
  apiUrl: string
  children?: React.ReactNode
}

export const CrudOnePage = ({ pageTitle, children, apiUrl }: CrudOnePageProps) => {
  const onCreateClick = useDisclosure()

  return (
    <CrudOnePageContext.Provider value={{ pageTitle, apiUrl, onCreateClick }}>
      {children}
    </CrudOnePageContext.Provider>
  )
}