import Link from "next/link";
import microCmsClient from "@/lib/microCms";
import getCategories from "@/lib/categories";
import ApiResponse from "@/types/articles";

const categories = await getCategories();

export const generateStaticParams = async () => {
  return categories.keys();
};

export default async function showArticle({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  // APIの仕様に沿って、カテゴリIDでの絞り込み条件を作成
  const filters = `category[equals]${categories.get(category)}`;

  // APIをキック
  const response: ApiResponse = await microCmsClient.get({
    endpoint: "articles",
    queries: { limit: 20, filters },
  });
  // 結果からコンテンツの配列と総件数を取り出す
  const { contents, totalCount } = response;

  return (
    <div>
      <Link href={`/`}>トップに戻る</Link>
      <p>{totalCount}件の記事があります</p>
      {contents.map((article) => {
        return (
          <article key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <h2>{article.title}</h2>
            </Link>
            <p>{article.description}</p>
            <p>作成日：{article.createdAt.toString()}</p>
          </article>
        );
      })}
    </div>
  );
}
