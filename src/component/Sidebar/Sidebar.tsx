import { ArrowLeftIcon } from "@chakra-ui/icons"
import { ArrowRightIcon } from "@chakra-ui/icons"
import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { match } from "ts-pattern"
import { SidebarHeader } from "./Header"
import { useSidebarMachine } from "./Sidebar.machine"

export const Sidebar = () => {
  const color = useColorModeValue("gray.100", "gray.700")
  const textColor = useColorModeValue("gray.900", "gray.100")
  const [state, dispatch] = useSidebarMachine();

  const onChange = () => {
    match(state)
      .with({ type: 'large' }, () => dispatch({ type: 'TOGGLE_SMALL' }))
      .with({ type: 'small' }, () => dispatch({ type: 'TOGGLE_LARGE' }))
      .otherwise(() => null)
  }

  return (
    <Box
      as="aside"
      pos="fixed"
      top="0"
      left="0"
      w={
        match(state)
          .with({ type: 'small' }, () => '20')
          .with({ type: 'large' }, () => '64')
          .otherwise(() => '64')
      }
      h="100%"
      bg={color}
      color={textColor}
      animation="sidebar 0.3s ease-in-out"
      overflow="hidden"
    >
      <SidebarHeader onClick={onChange} state={state} />
    </Box>
  )
}

export default Sidebar