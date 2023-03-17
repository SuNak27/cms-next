import {
  Avatar,
  Box,
  Divider,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorMode,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import {
  FiMenu,
  FiSun,
  FiMoon,
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

      <HStack spacing={{ base: '0', md: '2' }}>
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
          <Popover trigger={'hover'} placement={'bottom-end'}>
            <PopoverTrigger>
              <Box
                py={1}
                px={4}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
                _active={{ bg: useColorModeValue('gray.100', 'gray.600') }}
                borderRadius="md"
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
              >
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
                </HStack>
              </Box>
            </PopoverTrigger>


            <PopoverContent
              border={0}
              boxShadow={'xl'}
              bg={useColorModeValue('white', 'gray.700')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              p={4}
              rounded={'xl'}
              w={'200px'}
            >
              <Box
                cursor="pointer"
                py={1}
                px={3}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
                borderRadius="md"
              >
                Profile
              </Box>

              <Box
                cursor="pointer"
                py={1}
                px={3}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
                borderRadius="md"
              >
                Setting
              </Box>

              <Divider my={2}
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />

              <Box
                cursor="pointer"
                py={1}
                px={3}
                _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
                borderRadius="md"
              >
                Log out
              </Box>

            </PopoverContent>

          </Popover>
        </Flex>
      </HStack >
    </Flex >
  );
};