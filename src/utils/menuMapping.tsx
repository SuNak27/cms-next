export type menuMappingItem = {
  title: string
  children?: {
    [key: string]: menuMappingItem
  }
}

export type menuMapping = {
  [key: string]: menuMappingItem
}

export const menuMapping: menuMapping = {
  "article": {
    title: "Artikel",
    children: {
      "[id]": {
        title: "Detail Artikel"
      }
    }
  },
}