import { MenuSchemasProps } from '@/utils/menuSchemas';
import {
  Flex,
  FlexProps,
  Icon,
  Link
} from '@chakra-ui/react';
import LabelHeading from './Sidebar.LabelHeading';
import MenuItemChildren from './Sidebar.MenuItemChildren';

interface MenuItemProps extends FlexProps {
  menu: MenuSchemasProps[] | undefined;
}

export const MenuItem = ({ menu, ...rest }: MenuItemProps) => {
  return (
    <>
      {menu?.map((item, index) => {
        if (item.labelHeading) {
          return (
            <LabelHeading labelHeading={item.labelHeading} key={index}>
              <MenuItem menu={item.children} />
            </LabelHeading>
          );
        }

        if (item.children) {
          return (
            <MenuItemChildren key={index} icon={item.icon} name={item.name}>
              <MenuItem menu={item.children} />
            </MenuItemChildren>
          );
        }

        return (
          <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} key={index}>
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
              {item.icon && (
                <Icon
                  mr="4"
                  fontSize="16"
                  as={item.icon}
                />
              )}
              {item.name}
            </Flex>
          </Link>
        )
      })}
    </>
  );
};

export default MenuItem;