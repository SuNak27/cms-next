import Link from "next/link";

export default function Article({ pageTitle }: { pageTitle: string }) {
  return (
    <div>
      <h1>Article</h1>
      <p>{pageTitle}</p>
      <Link href="/article/1">
        Detail Article
      </Link>
    </div>
  )
}