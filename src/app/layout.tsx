import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Витя & Марина — 30 мая 2026",
  description: "Приглашение на свадьбу Вити и Марины. Остров Любви ждёт!",
  icons: {
    icon: {
      url: "/icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Nunito:wght@400;600;700;800&family=Press+Start+2P&family=Caveat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
