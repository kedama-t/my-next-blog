import microCmsClient from "@/lib/microCms";
import getArticles from "@/lib/articles";
import { Article } from "@/types/articles";

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
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: "articles",
    contentId: articleId,
  });

  return (
    <>
      <article className="w-4/5 mx-auto my-4 p-8 rounded-lg bg-base-200 shadow-xl">
        <h2 className="text-5xl mb-4">{article.title}</h2>
        <p className="text-xs">{article.createdAt.toString()}</p>
        <div className="divider">{article.description}</div>
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: article.body }} />
      </article>
    </>
  );
}
