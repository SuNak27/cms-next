import { FlexProps, Heading } from "@chakra-ui/react"

interface PageHeaderProps extends FlexProps {
  children: React.ReactNode
}

export const PageHeader = ({ children, ...rest }: PageHeaderProps) => {
  return (
    <Heading size={'md'} fontWeight={'semibold'} {...rest}>{children}</Heading>
  )
}