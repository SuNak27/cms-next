import Link from "next/link";

function DetailArticle() {
  return (
    <div>
      <h1>Article</h1>
      <Link href="/article/1">
        Detail Article
      </Link>
    </div>
  )
}

export default DetailArticle
