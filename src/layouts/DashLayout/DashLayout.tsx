import { Navbar, Sidebar, SidebarMobile } from "@/component";
import { Box, Flex, useBreakpointValue, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const sideBar = useBreakpointValue({
    base: <SidebarMobile onClose={onClose} isOpen={isOpen} />,
    md: <Sidebar onClose={() => onClose} />,
  });

  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Flex>
        <Navbar onOpen={onOpen} />
      </Flex>
      {sideBar}
      <Box ml={{ base: 0, md: 60 }} p="4" pt={24}>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  )
}

export default DashLayout;