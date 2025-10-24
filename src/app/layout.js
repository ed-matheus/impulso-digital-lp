/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: fixing the error */
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

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
        <Header />
        {children}
        <Footer />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17583189019"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17583189019');
            `,
          }}
        />
      </body>
    </html>
  );
}
