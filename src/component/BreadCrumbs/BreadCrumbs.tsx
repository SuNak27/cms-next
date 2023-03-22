import { ChevronRightIcon } from "@chakra-ui/icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { CrumbsMenuItem } from "./BreadCrumbs.MenuItem"

export const BreadCrumbs = () => {
  const router = useRouter()
  const menu = CrumbsMenuItem()
  const isActived = (link: string | undefined) => {
    return router.pathname == link
  }
  return (
    <Breadcrumb
      spacing='8px'
      separator={<ChevronRightIcon color='gray.500' />}
      fontWeight='medium'
      fontSize='sm'
      color='gray.500'
    >
      {menu?.map((item, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              as={Link}
              href={item?.link}
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'teal.400' }}
              color={isActived(item?.link) ? 'teal.400' : ''}
            >{item?.name}</BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}