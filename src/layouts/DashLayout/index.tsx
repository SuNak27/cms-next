import { Flex } from "@chakra-ui/react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" h="100vh">
      <Flex direction="column" flex="1">
        {children}
      </Flex>
    </Flex>
  )
}