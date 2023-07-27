import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar rounded-lg m-4 bg-base-300">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">マイブログ</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/categories/blog"prefetch={false} >日常ブログ</Link>
          </li>
          <li>
            <Link href="/categories/technology"prefetch={false} >テックブログ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}