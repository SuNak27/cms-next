import Link from "next/link";

export default function Article() {
  return (
    <div>
      <h1>Article</h1>
      <Link href="/article/detail-article">
        Detail Article
      </Link>
    </div>
  )
}