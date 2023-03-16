import { Sidebar } from "@/component/Sidebar";
import { Box } from "@chakra-ui/react";

export const DashLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Box w="100%" h="100%">
      <Sidebar />
    </Box >
  )
}

export default DashLayout;