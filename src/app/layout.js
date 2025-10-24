"use client"; // 👈 Adicione isso no topo do arquivo

import { useEffect } from "react";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  // 🔥 Garante que o evento seja enviado após a montagem do app
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        {/* --- META PIXEL CODE --- */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1295814718950929');
          `}
        </Script>

        <noscript>
          {/** biome-ignore lint/performance/noImgElement: good */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1295814718950929&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </head>

      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
