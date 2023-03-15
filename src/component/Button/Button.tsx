import { Button } from "@chakra-ui/react";

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "ghost" | "outline" | "solid" | "link" | "unstyled";
  color?: "primary" | "secondary" | "warning" | "danger" | "success" | "info";
}

export const Btn = (props: ButtonProps) => {
  return (
    <Button size={props.size} variant={props.variant ?? "solid"}>
      {props.children}
    </Button>
  );
}

export default Btn;

