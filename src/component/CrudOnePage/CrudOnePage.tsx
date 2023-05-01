import { useDisclosure } from "@chakra-ui/react"
import { CrudOnePageContext } from "./CrudOnePage.Context"
import { useCrudOnePageMachine } from "./CrudOnePage.Machine"
interface CrudOnePageProps {
  pageTitle: string
  apiUrl: string
  children?: React.ReactNode
  primaryKey?: string
}

export const CrudOnePage = ({ pageTitle, children, apiUrl, primaryKey = 'id' }: CrudOnePageProps) => {
  const modal = useDisclosure()
  const [state, dispatch] = useCrudOnePageMachine(apiUrl, modal, primaryKey)

  return (
    <CrudOnePageContext.Provider value={{ pageTitle, modal, state, dispatch, primaryKey }}>
      {children}
    </CrudOnePageContext.Provider>
  )
}