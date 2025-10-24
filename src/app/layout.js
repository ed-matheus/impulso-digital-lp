/** biome-ignore-all lint/performance/noImgElement: good */
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // <--- Import obrigatório

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Fonte para os títulos
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-montserrat",
});

// Fonte para o corpo do texto
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
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Caso o usuário esteja com JavaScript desativado */}
        <noscript>
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
