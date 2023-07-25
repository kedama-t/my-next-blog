import microCmsClient from "@/lib/microCms";
import ApiResponse from "@/types/articles";
import ArticleCard from "@/components/articleCard";
import { getLocalDateString } from "@/lib/utils";

export default async function Home() {
  // APIをキック
  const response: ApiResponse = await microCmsClient.get({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: "articles",
    queries: { limit: 20 },
  });
  // 結果からコンテンツを取り出す
  const { contents } = response;

  return (
    <div>
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
