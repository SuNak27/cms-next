import { createContext } from 'react'

type UseDisclosureReturn = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

export interface ICrudOnePageContext {
  pageTitle: string
  apiUrl: string
  onCreateClick: UseDisclosureReturn
}

export const CrudOnePageContext = createContext<ICrudOnePageContext>({
  pageTitle: '',
  apiUrl: '',
  onCreateClick: {
    isOpen: false,
    onOpen: () => { },
    onClose: () => { },
    onToggle: () => { },
  },
})
