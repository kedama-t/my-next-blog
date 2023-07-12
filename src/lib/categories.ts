import microCmsClient from '@/lib/microCms';

async function getCategories() {
  // カテゴリのAPIを叩いてnameEnとidを取得
  const response = await microCmsClient.get(
    {
      endpoint: 'categories',
      queries: { fields: 'nameEn,id' }
    }
  );
  
  // 名前からIDが取得できるMapオブジェクトにする
  const categoryMap = new Map<string,string>();
  response.contents.forEach((category:{nameEn:string,id:string}) =>{
    categoryMap.set(category.nameEn,category.id);
  })
  return categoryMap;
}

export default getCategories;