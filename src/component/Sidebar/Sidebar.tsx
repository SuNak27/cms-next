import MenuSchemas from "@/utils/menuSchemas";
import { Box, BoxProps, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import MenuItem from "./Sidebar.MenuItem";

interface SidebarContentProps extends BoxProps {
  onClose: () => void;
}

export const Sidebar = ({ onClose, ...rest }: SidebarContentProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      fontSize={{ base: "xs", md: "sm" }}
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box h={'100%'} pb={20}
        overflowY="hidden"
        _hover={{
          overflowY: 'auto',
        }}
        sx={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: useColorModeValue('gray.200', 'gray.600'),
            borderRadius: '24px',
          },
        }}>
        <MenuItem menu={MenuSchemas}></MenuItem>
      </Box>
    </Box>
  );
};