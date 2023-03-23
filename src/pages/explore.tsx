import { CrudOnePage } from "@/component";

const column = [
  { key: 'no' },
  { key: 'fullName' },
  { key: 'age', label: 'Age' }
]

const data = [
  { id: 1, fullName: 'John Doe', age: 32 },
  { id: 2, fullName: 'Jane Doe', age: 25 }
]

export default function Explore() {
  return (
    <CrudOnePage pageTitle="Explore" data={data} columns={column} />
  )
}