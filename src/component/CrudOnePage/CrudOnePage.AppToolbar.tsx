import { Flex, Spacer } from "@chakra-ui/react"
import { useContext } from "react"
import { PageHeader } from "../PageHeader"
import { CrudOnePageContext } from "./CrudOnePage.Context"

interface AppToolbarProps {
  children?: React.ReactNode
}

export const AppToolbar = ({ children }: AppToolbarProps) => {
  const { pageTitle } = useContext(CrudOnePageContext)
  return (
    <Flex flexDirection={{ basa: 'row', md: 'column' }} flexWrap={'wrap'}>
      <Flex flexDirection={'column'} justifyContent={'center'} flexWrap={'wrap'} mb={{ base: 4, md: 0 }}>
        <PageHeader fontWeight={'bold'} flexDirection={'column'} justifyContent={'center'}>
          {pageTitle}
        </PageHeader>
      </Flex>

      <Spacer />

      <Flex alignItems={'center'} gap={{ base: 2, md: 3 }} flexWrap={'wrap'}>
        {children}
      </Flex>
    </Flex>
  )
}