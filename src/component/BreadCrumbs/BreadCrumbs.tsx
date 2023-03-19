import { ChevronRightIcon } from "@chakra-ui/icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

type item = {
  name: string
  link: string
}

export const BreadCrumbs = () => {
  const router = useRouter()

  const crumbs = () => {
    const { pathname } = router
    let item: item[] = []

    if (pathname == '/') {
      item = [{ name: 'Home', link: '/' }]
      return item
    }

    const splittedPaths = pathname.split("/").filter((x) => x);
    const matchedPaths = splittedPaths.map((path, index) => {
      const link = `/${splittedPaths.slice(0, index + 1).join("/")}`;
      const name = path
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
      return { name, link };
    });

    item = [{ name: 'Home', link: '/' }, ...matchedPaths]
    return item
  }

  const menu = crumbs()

  return (
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
      {menu?.map((item, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink as={Link} href={item.link}>{item.name}</BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}