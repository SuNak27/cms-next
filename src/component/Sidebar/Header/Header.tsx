import { Button } from "@/component/Button"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { ArrowRightIcon } from "@chakra-ui/icons"
import { Box, Text } from "@chakra-ui/react"
import { useState } from "react"
import { match } from "ts-pattern"
import { useSidebarMachine } from "../Sidebar.machine"

type SidebarHeaderProps = {
  onClick: () => void,
  state: ReturnType<typeof useSidebarMachine>[0]
}

export const SidebarHeader = (props: SidebarHeaderProps) => {
  return (
    <Box
      as="header"
      w="100%"
      h="20"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Text fontSize="xl" fontWeight="bold" display={
        match(props.state)
          .with({ type: 'small' }, () => 'none')
          .with({ type: 'large' }, () => 'block')
          .otherwise(() => 'block')
      }>
        Logo
      </Text>

      <Button onClick={props.onClick}>
        {match(props.state)
          .with({ type: 'small' }, () => <ArrowRightIcon />)
          .with({ type: 'large' }, () => <ArrowLeftIcon />)
          .otherwise(() => <ArrowRightIcon />)
        }
      </Button>
    </Box>
  )
}

export default SidebarHeader