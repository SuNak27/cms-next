import { MenuSchemasProps } from '@/utils';
import { FlexProps } from '@chakra-ui/react';
import LabelHeading from './Sidebar.LabelHeading';
import MenuItemChildren from './Sidebar.MenuItemChildren';
import SidebarLink from './Sidebar.Link';

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
          <SidebarLink item={item} key={index} {...rest} />
        )
      })}
    </>
  );
};

export default MenuItem;