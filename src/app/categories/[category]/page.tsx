import microCmsClient from "@/lib/microCms";
import getCategories from "@/lib/categories";
import ApiResponse from "@/types/articles";
import ArticleCard from "@/components/articleCard";
import { getLocalDateString } from "@/lib/utils";

const categories = await getCategories();

export const generateStaticParams = async () => {
  return [...categories.keys()].map(category =>({category}));
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
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: "articles",
    queries: { limit: 20, filters },
  });
  // 結果からコンテンツの配列と総件数を取り出す
  const { contents, totalCount } = response;

  return (
    <div>
      <div className="card w-4/5 my-4 mx-auto bg-base-200 shadow-xl">
        <div className="card-body">{totalCount}件の記事があります</div>
      </div>
      {contents.map((article) => {
        return (
          <article key={article.id}>
            <ArticleCard
              id={article.id}
              title={article.title}
              description={article.description}
              createdAt={getLocalDateString(article.createdAt)}
            />
          </article>
        );
      })}
    </div>
  );
}
