import { Box, Drawer, DrawerContent } from "@chakra-ui/react"
import { Sidebar } from "./Sidebar"

type SidebarMobileProps = {
  onClose: () => void
  isOpen: boolean
}

export const SidebarMobile = ({ onClose, isOpen }: SidebarMobileProps) => {
  return (
    <Box>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  )
}