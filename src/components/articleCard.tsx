import Link from "next/link";

interface ArticleCardProps {
  id:string,
  title:string,
  description?:string,
  createdAt:string
}

export default function ArticleCard(props: ArticleCardProps) {

  const {id,title,description,createdAt} = props;
  return (
    <div className="card w-4/5 mx-auto my-4 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className='text-xs'>{createdAt}</p>
        <div className="card-actions justify-end">
          <Link href={`/articles/${id}`} className="btn btn-primary">記事を読む</Link>
        </div>
      </div>
    </div>
  );
}