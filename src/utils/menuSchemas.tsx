import {
  FiHome,
  FiStar,
  FiSettings,
  FiUser,
  FiMousePointer,
  FiPieChart,
  FiInfo,
  FiPackage,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface MenuSchemasProps {
  link?: string;
  labelHeading?: string;
  name?: string;
  icon?: IconType;
  children?: MenuSchemasProps[];
}

export const MenuSchemas: Array<MenuSchemasProps> = [
  { name: 'Home', icon: FiHome, link: '/' },
  {
    labelHeading: 'Menu',
    children: [
      { name: 'Product', icon: FiPackage, link: '/product' },
      { name: 'About', icon: FiInfo, link: '/about' },
      { name: 'Article', icon: FiInfo, link: '/article' },
      {
        name: 'User Profile',
        icon: FiUser,
        children: [
          { name: 'Settings', icon: FiSettings },
          { name: 'Overview', icon: FiMousePointer },
          { name: 'Favourites', icon: FiStar },
        ],
      },
      {
        name: 'User ',
        icon: FiUser,
        children: [
          {
            name: 'Settings',
            icon: FiSettings,
            children: [
              { name: 'Email', icon: FiMousePointer },
              {
                name: 'Password', icon: FiStar,
                children: [
                  {
                    name: 'Tset',
                    icon: FiStar,
                  }
                ]
              },
            ],
          },
          { name: 'Overview', icon: FiMousePointer },
          { name: 'Favourites', icon: FiStar },
        ],
      },
    ],
  },
  {
    labelHeading: 'Statistics',
    children: [
      { name: 'Insights', icon: FiPieChart }
    ],
  },
];

export default MenuSchemas;