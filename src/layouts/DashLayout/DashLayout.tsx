import { Navbar, Sidebar, SidebarMobile } from "@/component";
import { Box, Flex, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box h={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')} >
      <Flex>
        <Navbar onOpen={onOpen} />
        <Sidebar
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
      </Flex>
      <SidebarMobile onClose={onClose} isOpen={isOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" pt={24}>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ translateX: 100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: 100, opacity: 0, }}
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