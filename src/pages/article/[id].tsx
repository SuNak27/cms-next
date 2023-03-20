import Link from "next/link";
import { useRouter } from "next/router";

function DetailArticle() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Article</h1>
      <p>{id}</p>
      <Link href="/article/1">
        Detail Article
      </Link>
    </div>
  )
}

export default DetailArticle
