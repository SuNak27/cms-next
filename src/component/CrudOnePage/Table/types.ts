export interface ColumnTableProps {
  key: string
  label?: string
}

export interface IPaginationProps {
  totalPage: number;
  currentPage: number;
  limitPage?: number;
  onChange: (page: number) => void;
}

export interface ITheadProps {
  columns: ColumnTableProps[]
  borderColor?: string
  color?: string
}

export interface ITbodyProps {
  data: Array<Record<string, any>>
  columns: ColumnTableProps[]
  backgroundColor?: string
  borderColor?: string
  color?: string
  isLoading?: boolean
  isError?: boolean
  emptyText?: string
  currentPage: number
  limit: number
}

export type PaginationItemProps = {
  label: string | number | React.ReactNode,
  isActive?: boolean,
  isDisabled?: boolean,
  onPageChange: () => void
}