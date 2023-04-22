import { CrudOnePageContext } from "./CrudOnePage.Context"
interface CrudOnePageProps {
  pageTitle: string
  apiUrl: string
  children?: React.ReactNode
}

export const CrudOnePage = ({ pageTitle, children, apiUrl }: CrudOnePageProps) => {
  return (
    <CrudOnePageContext.Provider value={{ pageTitle, apiUrl }}>
      {children}
    </CrudOnePageContext.Provider>
  )
}