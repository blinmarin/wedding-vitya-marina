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
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
