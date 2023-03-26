import { Button } from "../Button"

interface CreateButtonProps {
  text?: string
}

export const CreateButton = ({ text }: CreateButtonProps) => {
  return (
    <Button variant="info" size={'sm'}>
      {text || 'Create'}
    </Button>
  )
}