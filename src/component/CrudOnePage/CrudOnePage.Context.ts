import { createContext } from 'react'

export interface ICrudOnePageContext {
  pageTitle: string
  apiUrl: string
}

export const CrudOnePageContext = createContext<ICrudOnePageContext>({
  pageTitle: '',
  apiUrl: ''
})
