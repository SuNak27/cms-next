import { useDisclosure } from "@chakra-ui/react"
import { CrudOnePageContext } from "./CrudOnePage.Context"
import { useCrudOnePageMachine } from "./CrudOnePage.Machine"
interface CrudOnePageProps {
  pageTitle: string
  apiUrl: string
  children?: React.ReactNode
}

export const CrudOnePage = ({ pageTitle, children, apiUrl }: CrudOnePageProps) => {
  const onCreateClick = useDisclosure()
  const [state, dispatch] = useCrudOnePageMachine(apiUrl, onCreateClick)

  return (
    <CrudOnePageContext.Provider value={{ pageTitle, onCreateClick, state, dispatch }}>
      {children}
    </CrudOnePageContext.Provider>
  )
}