import {
  FiHome,
  FiCompass,
  FiStar,
  FiSettings,
  FiUser,
  FiMousePointer,
  FiPieChart,
} from 'react-icons/fi';
import { IconType } from 'react-icons';


export interface MenuSchemasProps {
  labelHeading?: string;
  name?: string;
  icon?: IconType;
  children?: MenuSchemasProps[];
}

export const MenuSchemas: Array<MenuSchemasProps> = [
  { name: 'Explore', icon: FiCompass },
  {
    labelHeading: 'dashboard',
    children: [
      { name: 'Home', icon: FiHome },
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