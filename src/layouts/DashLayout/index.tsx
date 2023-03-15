import Btn from "@/component/Button/Button";
import { Box } from "@chakra-ui/react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Btn>
        Hello
      </Btn>
    </Box>
  )
}