import { UseDisclosureReturn } from '@chakra-ui/react'
import { createContext } from 'react'

type UseDisclosureReturn = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

export interface ICrudOnePageContext {
  pageTitle: string
  onCreateClick: UseDisclosureReturn
  state: State
  dispatch: (action: Action) => void
}

export const CrudOnePageContext = createContext<ICrudOnePageContext>({
  pageTitle: '',
  onCreateClick: {
    isOpen: false,
    onOpen: () => { },
    onClose: () => { },
    onToggle: () => { },
    isControlled: false,
    getButtonProps: () => { },
    getDisclosureProps: () => { },
  },
  state: { type: 'idle' },
  dispatch: () => { },
})
