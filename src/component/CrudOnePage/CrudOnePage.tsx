import { CrudOnePageContext } from "./CrudOnePage.Context"
interface CrudOnePageProps {
  pageTitle: string
  children?: React.ReactNode
}

export const CrudOnePage = ({ pageTitle, children }: CrudOnePageProps) => {
  return (
    <CrudOnePageContext.Provider value={{ pageTitle }}>
      {children}
    </CrudOnePageContext.Provider>
  )
}