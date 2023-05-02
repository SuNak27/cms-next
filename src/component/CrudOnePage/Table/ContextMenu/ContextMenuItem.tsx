import React, { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { ContextMenuContext } from "./ContextMenu";

type Props = {
  onClick: () => void;
  colorScheme?: string;
  disabled?: boolean;
  icon?: React.ReactElement;
  children: React.ReactNode;
};

export const ContextMenuItem: React.FC<Props> = ({
  children,
  onClick,
  colorScheme,
  icon,
  disabled = false
}) => {
  const [variant, setVariant] = useState("ghost");
  const { closeMenu } = useContext(ContextMenuContext);
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        onClick();
        closeMenu();
      }}
      leftIcon={icon}
      variant={variant}
      onMouseOver={() => setVariant("solid")}
      onMouseOut={() => setVariant("ghost")}
      borderRadius={'md'}
      mx={2}
      justifyContent="left"
      size="sm"
      overflow="hidden"
      textOverflow="ellipsis"
      colorScheme={colorScheme}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
