import { Btn } from "@/component";
import { Box } from "@chakra-ui/react";

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Btn>
        Hello
      </Btn>
    </Box>
  )
}

export default DashLayout;