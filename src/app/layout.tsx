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
    "Dolphin Équipements, spécialisé dans les équipements hydrauliques, pneumatiques, et les services de maintenance et nettoyage industriel. Fournir des produits et services hydrauliques et pneumatiques de qualité. Basés à Tunis, nous offrons des solutions sur mesure pour les secteurs industriels, BTP, et marins..",
  keywords:
    "Dolphin Équipements, hydraulique, pneumatique, flushing hydraulique, nettoyage industriel, produits hydrauliques et pneumatiques, équipements hydrauliques, maintenance hydraulique, équipements pneumatiques,  équipements BTP, équipements marins, Tunis",
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
