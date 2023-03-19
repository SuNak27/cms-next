import { MenuSchemasProps } from "@/utils/menuSchemas";
import { Flex, FlexProps, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface SidebarLinkProps extends FlexProps {
  item: MenuSchemasProps;
}

export default function SidebarLink({ item, ...rest }: SidebarLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useRouter()

  const checkActive = () => {
    if (item.link) {
      if (item.link === '/') {
        setIsActive(pathname === item.link)
        return
      }
      const path = pathname.startsWith(item.link) && item.link !== '/'
      setIsActive(path)
    } else {
      setIsActive(false)
    }
  }

  useEffect(() => {
    checkActive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <Link as={NextLink} href={item.link || ''} style={{ textDecoration: 'none' }} >
      <Flex
        align="center"
        px={isActive ? '4' : '8'}
        py="2"
        mx={isActive ? '4' : '0'}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        transition="all 0.2s ease-in-out"
        _hover={{
          color: isActive ? 'white' : 'teal.400',
        }}
        bg={isActive ? 'teal.400' : ''}
        color={isActive ? 'white' : ''}
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
}