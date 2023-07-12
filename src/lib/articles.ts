import microCmsClient from '@/lib/microCms';
import ApiResponse from '@/types/articles';

async function getArticles() {
  // 記事のAPIを叩いてidを取得
  const response:ApiResponse = await microCmsClient.get(
    {
      endpoint: 'articles',
      queries: { limit:1000, fields: 'id' }
    }
  );
  
  // idだけの配列を返す
  return response.contents.map(article => article.id);
}

export default getArticles;