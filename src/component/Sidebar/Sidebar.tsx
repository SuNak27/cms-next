import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
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
    <>
      <Box
        as="aside"
        pos={'sticky'}
        top="0"
        left="0"
        w={state.width}
        h="100vh"
        bg={color}
        color={textColor}
        transition="width 0.3s ease-in-out"
        overflow="hidden"
        display={{
          base: 'none',
          md: 'block'
        }}
      >
        <SidebarHeader onClick={onChange} state={state} />
      </Box>
    </>
  )
}

export default Sidebar