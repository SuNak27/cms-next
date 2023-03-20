import { menuMapping } from "@/utils"

export const getTitle = (path: string) => {
  let name = ""
  Object.keys(menuMapping).forEach((key) => {
    if (key == path) {
      name = menuMapping[key].title
    } else {
      const children = menuMapping[key].children
      if (children) {
        Object.keys(children).forEach((childKey) => {
          if (childKey == path) {
            name = children[childKey].title
          }
        })
      }
    }
  })

  return name
}

export default getTitle