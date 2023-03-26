import { createContext } from 'react'

export interface ICrudOnePageContext {
  pageTitle: string
}

export const CrudOnePageContext = createContext<ICrudOnePageContext>({
  pageTitle: '',
})
