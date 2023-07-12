import Link from "next/link";
import microCmsClient from "@/lib/microCms";
import getArticles from "@/lib/articles";
import {Article} from "@/types/articles";

const articles = await getArticles();

export const generateStaticParams = async () => {
  return articles;
};

export default async function listArticles({
  params,
}: {
  params: { articleId: string };
}) {
  const { articleId } = params;

  // APIをキック
  const article: Article = await microCmsClient.get({
    endpoint: "articles",
    contentId: articleId,
  });
  
  return (
    <>
    <Link href={`/categories/${article.category.nameEn}`}>記事一覧に戻る</Link>
    <article>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>作成日：{article.createdAt.toString()}</p>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </article>
    </>
  );
}
