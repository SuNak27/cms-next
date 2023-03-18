import { Navbar, Sidebar } from "@/component";
import { Box, Drawer, DrawerContent, Flex, useColorModeValue, useDisclosure } from "@chakra-ui/react";

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')} >
      <Flex>
        <Navbar onOpen={onOpen} />
        <Sidebar
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
      </Flex>
      <Box>
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </Box>
      <Box ml={{ base: 0, md: 60 }} p="4" pt={24}   >
        {children}
      </Box>
    </Box>
  )
}

export default DashLayout;