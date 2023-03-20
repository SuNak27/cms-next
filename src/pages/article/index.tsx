import Link from "next/link";

export default function Article() {
  return (
    <div>
      <h1>Article</h1>
      <Link href="/article/1">
        Detail Article
      </Link>
    </div>
  )
}