import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
export interface ButtonProps extends ChakraButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "warning" | "danger" | "success" | "info";
}

export const Button = ({ children, variant, onClick, ...rest }: ButtonProps) => {
  return (
    <ChakraButton variant={variant} onClick={onClick} {...rest}>
      {children}
    </ChakraButton>
  );
}

export default Button;

