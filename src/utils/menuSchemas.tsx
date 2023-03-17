import { BsLayersFill } from "react-icons/bs";

export interface Heading {
  labelHeading?: string;
  children?: MenuSchema[];
}

export interface MenuSchema extends Heading {
  label: string;
  path: string;
  icon: React.ReactNode;
}


export const menuSchemas: MenuSchema[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <BsLayersFill />,
  },
];

export default menuSchemas;