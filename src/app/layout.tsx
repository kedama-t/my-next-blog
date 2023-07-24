import "./globals.css";
import Header from "@/components/header";
import Author from "@/components/author";

export const metadata = {
  title: "マイブログ",
  description: "私のブログです",
};

const { name, imageSrc, profile } = {
  name: "毛玉T",
  imageSrc: "/author.png",
  profile: "最近はNext.jsにハマっています。",
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
        <div className="flex">
          <div className="flex-auto">{children}</div>
          <div className="hidden md:inline-block flex-none w-80 mt-4">
            <Author name={name} imageSrc={imageSrc} profile={profile} />
          </div>
        </div>
      </body>
    </html>
  );
}
