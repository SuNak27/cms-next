import { Button } from "../Button"
import { CrudOnePageContext } from "./CrudOnePage.Context";
import * as React from 'react'
// import { useCrudOnePageMachine } from "./CrudOnePage.Machine";
import { match } from "ts-pattern";

interface CreateButtonProps {
  text?: string
}

export const CreateButton = ({ text }: CreateButtonProps) => {
  const curdContext = React.useContext(CrudOnePageContext);

  const onClick = () => {
    match(curdContext.state.type)
      .with('success', () => {
        curdContext.dispatch({ type: 'CREATE' })
      })
      .otherwise(() => { })

    curdContext.onCreateClick.onOpen()
  }

  return (
    <Button variant="info" size={'md'} onClick={onClick}>
      {text || 'Create'}
    </Button>
  )
}