import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

// const merriweather = Merriweather({
//   weight: ["300", "400", "700"],
//   subsets: ["latin"],
// });
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
      <body className={`${roboto}  antialiased`}>
        <SpeedInsights />
        <Toaster
          toastOptions={{
            classNames: {
              error: "bg-red-400 text-white",
              success: "bg-green-500 text-white",
            },
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
