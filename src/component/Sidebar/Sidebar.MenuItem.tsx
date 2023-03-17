import { Flex, FlexProps, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
}

export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        px="4"
        py="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'teal.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;