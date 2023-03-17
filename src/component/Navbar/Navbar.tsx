import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import {
  FiMenu,
  FiSun,
  FiMoon,
  FiChevronDown,
} from 'react-icons/fi';


interface NavbarProps extends FlexProps {
  onOpen: () => void;
}

export const Navbar = ({ onOpen, ...rest }: NavbarProps) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      id="navbar"
      left="0"
      pos={'fixed'}
      right="0"
      zIndex={999}
      alignItems="center"
      bg={useColorModeValue('white', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          onClick={toggleColorMode}
          icon={
            useColorModeValue(
              <FiMoon />,
              <FiSun />
            )
          }
        />

        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              px={4}
              _hover={{ bg: useColorModeValue('gray.100', 'gray.800') }}
              _active={{ bg: useColorModeValue('gray.100', 'gray.800') }}
              borderRadius="md"
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">My Name</Text>
                  <Text fontSize="xs" color="gray.400">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.700')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              p="4"
            >
              <MenuItem borderRadius="md">Profile</MenuItem>
              <MenuItem borderRadius="md">Setting</MenuItem>
              <MenuDivider
                borderColor={useColorModeValue('gray.200', 'gray.800')}
              />
              <MenuItem borderRadius="md">Sign Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};