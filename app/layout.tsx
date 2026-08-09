import type { Metadata, Viewport } from "next";
import { Hahmlet } from "next/font/google";
import { site } from "@/content/resume";
import "./globals.css";

/**
 * 제목용 Hahmlet 은 구글 폰트에 있어 next/font 로 자체 호스팅합니다.
 * 본문용 SUIT / Pretendard 는 구글 폰트에 없어 <head> 의 CDN 스타일시트로 받습니다.
 * (두 폰트 모두 한글 동적 서브셋이라 필요한 글자만 내려받습니다.)
 */
const hahmlet = Hahmlet({
  // 구글이 한글을 이름 없는 청크로 쪼개 주기 때문에 latin 만 지정해도
  // 한글 글리프가 전부 따라옵니다. 실제로 쓰는 굵기는 500(인용구)과 600(제목) 둘뿐입니다.
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hahmlet",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "profile",
    locale: "ko_KR",
    title: site.title,
    description: site.ogDescription,
  },
  twitter: { card: "summary" },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#232322",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={hahmlet.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
