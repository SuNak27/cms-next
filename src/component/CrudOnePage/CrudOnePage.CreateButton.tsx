import { Button } from "../Button"
import { CrudOnePageContext } from "./CrudOnePage.Context";
import * as React from 'react'

interface CreateButtonProps {
  text?: string
}

export const CreateButton = ({ text }: CreateButtonProps) => {
  const curdContext = React.useContext(CrudOnePageContext);

  const onClick = () => {
    curdContext.onCreateClick.onOpen();
  }

  return (
    <Button variant="info" size={'md'} onClick={onClick}>
      {text || 'Create'}
    </Button>
  )
}