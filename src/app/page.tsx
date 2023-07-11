import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello World!!</h1>
        <p>ようこそ私のブログへ。ゆっくりしていってね！</p>
        <Link href="/about">自己紹介ぺージ</Link>
      </div>
    </main>
  )
}
