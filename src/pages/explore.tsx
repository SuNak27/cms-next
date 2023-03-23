import { CrudOnePage } from "@/component";

const column = [
  { key: 'no' },
  { key: 'full_name' },
  { key: 'age', label: 'Age' }
]

const data = [
  { id: 1, full_name: 'John Doe', age: 32 },
  { id: 2, full_name: 'Jane Doe', age: 25 }
]

export default function Explore() {
  return (
    <CrudOnePage pageTitle="Explore" data={data} columns={column} />
  )
}