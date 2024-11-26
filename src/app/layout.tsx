import type { Metadata } from "next";
import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Dolphine Equipements",
  description: "Hydrolavage, nettoyage industriel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} ${merriweather} antialiased`}>
        {children}
      </body>
    </html>
  );
}
