import { MenuSchemasProps } from '@/utils/menuSchemas';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  FlexProps,
  Icon,
  Link
} from '@chakra-ui/react';

interface MenuItemProps extends FlexProps {
  menu: MenuSchemasProps[] | undefined;
}

export const NavItem = ({ menu, ...rest }: MenuItemProps) => {
  return (
    <>

      {menu?.map((item) => {
        if (item.labelHeading) {
          return (
            <>
              <Flex
                key={item.labelHeading}
                align="center"
                color="gray.400"
                fontWeight="semibold"
                fontSize="xs"
                textTransform="uppercase"
                px="6"
                my="3"
              >
                {item.labelHeading}
              </Flex>
              <NavItem menu={item.children} key={item.labelHeading} />
            </>
          );
        }

        if (item.children) {
          return (
            <>
              <Accordion allowToggle key={item.name}>
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
                      {item.icon && (
                        <Icon
                          mr="4"
                          fontSize="16"
                          as={item.icon}
                        />
                      )}
                      {item.name}
                    </Box>
                    <AccordionButton
                      maxH={'32px'}
                      w={'52px'}
                      _hover={{ bg: 'transparent' }}
                    >
                      <AccordionIcon />
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel pb={2}>
                    <NavItem menu={item.children} ms={0} me={0} />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </>
          );
        }


        return (
          <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} key={item.name}>
            <Flex
              align="center"
              px="4"
              py="2"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: 'teal.400',
                color: 'white',
              }}
              {...rest}
            >
              {item.icon && (
                <Icon
                  mr="4"
                  fontSize="16"
                  as={item.icon}
                />
              )}
              {item.name}
            </Flex>
          </Link>
        )
      })}
    </>
  );
};

export default NavItem;