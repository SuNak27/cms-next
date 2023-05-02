import { Tbody } from "@chakra-ui/react";
import React, { useContext, MouseEvent } from "react";
import { ContextMenuContext } from "./ContextMenu";

type Props = {
  children: React.ReactNode;
  borderColor: string;
};

export const ContextMenuTrigger: React.FC<Props> = ({ children, borderColor }) => {
  const { openMenu, setPosition, } = useContext(ContextMenuContext);
  return (
    <Tbody
      onContextMenu={(event: MouseEvent) => {
        event.preventDefault();
        setPosition({ x: event.clientX, y: event.clientY });
        openMenu();
      }}
      border={`1px solid`}
      borderColor={borderColor}
      borderRadius={'lg'}
    >
      {children}
    </Tbody>
  );
};
