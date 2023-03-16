import { Button } from "@/component";
import { Box, useColorMode } from "@chakra-ui/react";

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w="100%" h="100%">
      <Button onClick={toggleColorMode} variant={'danger'}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box >
  )
}

export default DashLayout;