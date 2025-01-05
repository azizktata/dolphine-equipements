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

export const metadata: Metadata = {
  title: "Dolphin Équipements",
  description:
    "Spécialisé dans les équipements hydrauliques, pneumatiques, et les services de maintenance et nettoyage industriel. Fournir des produits et services hydrauliques et pneumatiques de qualité. Basés à Tunis, nous offrons des solutions sur mesure pour les secteurs industriels, BTP, et marins..",
  keywords:
    "Dolphin Équipements, hydraulique, pneumatique, nettoyage industriel, produits hydrauliques, équipements pneumatiques tunisie, équipements hydrauliques, équipements hydrauliques tunisie",
  metadataBase: new URL("https://www.dolphinequipements.tn/"),
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
