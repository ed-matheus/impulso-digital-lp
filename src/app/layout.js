import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MetaPixel from "@/components/MetaPixel";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Seu Impulso Digital",
  description: "Crie um site profissional que gera resultados reais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {/* Pixel fica aqui 👇 */}
        <MetaPixel />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
