import { useRouter } from "next/router"
import { getTitle } from "@/mixins"

type menuItem = {
  name: string | undefined
  link: string | undefined
}

export const CrumbsMenuItem = () => {
  const router = useRouter()
  const { pathname } = router
  let item: menuItem[] = []

  if (pathname == '/') {
    item = [{ name: 'Home', link: '/' }]
    return item
  }

  const splittedPaths = pathname.split("/").filter((x) => x);
  const matchedPaths = splittedPaths.map((path, index) => {
    const link = `/${splittedPaths.slice(0, index + 1).join("/")}`;
    let name = path
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    name = getTitle(path) || name

    return { name, link }
  });

  item = [{ name: 'Home', link: '/' }, ...matchedPaths]
  return item
}