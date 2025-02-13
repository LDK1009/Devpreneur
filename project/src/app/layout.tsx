import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devpreneur - 1인 개발 창업가 플랫폼",
  description:
    "기획, 개발, 디자인, 마케팅, 비즈니스까지 창업에 필요한 모든 정보를 제공하고, 커뮤니티에서 네트워킹하며 성장할 수 있는 플랫폼",
  keywords: "1인 개발, 창업, 스타트업, 개발자, 비즈니스, 마케팅, 디자인, 네트워킹",
  openGraph: {
    title: "Devpreneur - 1인 개발 창업가 플랫폼",
    description:
      "기획, 개발, 디자인, 마케팅, 비즈니스까지 창업에 필요한 모든 정보를 제공하고, 커뮤니티에서 네트워킹하며 성장할 수 있는 플랫폼",
    url: "https://devpreneur.com/", // 실제 URL로 변경
    images: [
      {
        url: "https://devpreneur.com/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devpreneur 대표 이미지",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
