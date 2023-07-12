type ContentBase = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
  revisedAt: Date,
}

type Category = {
  name: string,
  nameEn: string,
} & ContentBase

type Article = {
  title: string,
  description?: string,
  category: Category
  body: string,
} & ContentBase

type ApiResponse = {
  contents: Article[]
  totalCount: number,
  offset: number,
  limit: number
}

export default ApiResponse;
export type {Article};