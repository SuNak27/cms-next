import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type MenuItemChildrenProps = {
  children: React.ReactNode;
  icon: IconType | undefined;
  name: string | undefined;
};

export const MenuItemChildren = ({ children, icon, name, ...rest }: MenuItemChildrenProps) => {

  return (
    <Accordion allowToggle>
      <AccordionItem
        border="none"
      >
        <Flex
          align="center"
          px="4"
          py="1"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          justifyContent="space-between"
          _hover={{
            bg: 'teal.400',
            color: 'white',
          }}
          {...rest}
        >
          <Box w={'100%'} display={'flex'} alignItems={'center'}>
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                as={icon}
              />
            )}
            {name}
          </Box>
          <AccordionButton
            maxH={'32px'}
            w={'52px'}
            _hover={{ bg: 'transparent' }}
          >
            <AccordionIcon />
          </AccordionButton>
        </Flex>
        <AccordionPanel pb={2} ps={2} pe={0}>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default MenuItemChildren;