import { Sidebar } from "@/component/Sidebar";
import { Box, Container } from "@chakra-ui/react";

export const DashLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
    >
      <Sidebar />
      {/* {children} */}

      <Box
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Container maxW="container.xl" h="100%">
          {children}
        </Container>
      </Box>

    </Box >
  )
}

export default DashLayout;