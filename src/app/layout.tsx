import './globals.css'
import Header from "@/components/header";

export const metadata = {
  title: "マイブログ",
  description: "私のブログです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="w-4/5 m-auto">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
