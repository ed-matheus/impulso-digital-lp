"use client";

import { motion } from "framer-motion";
import CardComponent from "@/components/CardComponent";
import ProjectCard from "@/components/ProjectCard";
import { RxPencil2, RxLightningBolt, RxTarget } from "react-icons/rx";
import { RiWhatsappLine } from "react-icons/ri";

// Dados dos Serviços
const servicesData = [
  {
    title: "Design que Vende",
    text: "Seu site será visualmente atraente, moderno e 100% responsivo, projetado para capturar a atenção e gerar ação em qualquer dispositivo.",
    icon: <RxPencil2 />,
  },
  {
    title: "Performance e Velocidade",
    text: "Carregamento rápido, otimização de imagens e código limpo — tudo pensado para oferecer a melhor experiência e ranqueamento.",
    icon: <RxLightningBolt />,
  },
  {
    title: "Foco em Conversão",
    text: "Cada seção do site é pensada estrategicamente para transformar visitantes em clientes — com botões de ação claros e estrutura persuasiva.",
    icon: <RxTarget />,
  },
];

// Dados do Portfólio
const portfolioData = [
  {
    imageUrl: "/img/tania-neves.png",
    title: "Loja Virtual Tânia Neves",
    text: "Se trata de um e-commerce para uma esteticista que precisava de um site para venda de suplementos de parceiros.",
    altText: "Imagem do site da Tânia Neves",
    link: "https://tanianeves.com.br/",
  },
  {
    imageUrl: "/img/green-gold.png",
    title: "Loja Virtual Green Gold",
    text: "E-commerce completo com WooCommerce. Colaboração com Pixel12Digital.",
    altText: "Imagem da loja virtual Green Gold",
    link: "https://greengoldjoias.com.br/",
  },
  {
    imageUrl: "/img/marmoraria-brilhante-print.png",
    title: "Landing Page - Marmoraria Brilhante",
    text: "Página de vendas focada em resultados, com design persuasivo para captação de leads. Gerou 2x mais contatos para a empresa.",
    altText: "Imagem da landing page Marmoraria Brilhante",
    link: "http://marmorariabrilhante.com.br/",
  },
];

export default function Page() {
  // --- FUNÇÃO DE CONVERSÃO ---
  const handleConversion = () => {
    if (typeof window !== "undefined") {
      // Meta Pixel (evento de contato/lead)
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead");
      } else {
        console.warn("fbq não carregado ainda. Evento não enviado.");
      }
    } else {
      console.warn("gtag não carregado ainda. Evento não enviado.");
    }
  };

  return (
    <main className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-5 px-6 py-20 text-center sm:px-8 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl"
        >
          Tenha um Site Profissional que Atrai Clientes Todos os Dias
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-lg md:text-xl"
        >
          Transforme sua presença online em uma máquina de gerar oportunidades —
          com design moderno, performance e estratégia digital.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          href="https://wa.me/5511943834648"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleConversion}
          className="cta flex items-center gap-2 mt-6 rounded-full bg-cyan-h px-8 py-3 text-base font-semibold text-dark shadow-lg shadow-cyan-h/50 transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-4 sm:text-lg"
        >
          <RiWhatsappLine />
          Quero um orçamento gratuito
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-md md:text-lg"
        >
          ✅ +10 negócios já conquistaram presença digital com resultados reais.
        </motion.p>
      </section>

      {/* Seção de Serviços */}
      <section
        id="servicos"
        className="w-full bg-light px-6 py-16 text-dark sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-bold tracking-tight md:text-4xl"
          >
            Por que um Site Profissional é o Passo Que Seu Negócio Precisa Dar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 mt-4 text-center font-medium md:mb-16 md:text-xl"
          >
            Mais do que um site bonito, você terá uma ferramenta estratégica
            para aumentar suas vendas e conquistar autoridade.
          </motion.p>
          <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-sm"
              >
                <CardComponent {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Portfólio */}
      <section id="portfolio" className="w-full px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-bold md:mb-16 md:text-4xl"
          >
            Resultados Que Falam Por Si
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 mt-4 text-center font-medium md:mb-16 md:text-xl"
          >
            Confira alguns dos projetos que ajudaram empresas a se destacarem no
            digital.
          </motion.p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...proj} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section
        id="contato"
        className="w-full flex flex-col items-center justify-center bg-light px-6 py-16 text-center text-dark sm:px-8 md:py-24"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold leading-tight md:text-5xl"
        >
          Pronto Para Dar o Próximo Passo?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-black/80 md:text-xl"
        >
          Vamos criar um site que valorize sua marca e gere resultados de
          verdade.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          href="https://wa.me/5511943834648"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleConversion}
          className="cta flex items-center justify-center gap-2 mt-6 rounded-full bg-cyan-h px-8 py-3 text-base font-semibold text-dark shadow-lg shadow-cyan-h/50 transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-4 sm:text-lg"
        >
          <RiWhatsappLine />
          Falar com Matheus
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-md text-black/80 md:text-lg"
        >
          ⚡ Vagas limitadas para novos projetos neste mês
        </motion.p>

        <motion.small
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-black/80 md:text-xl"
        >
          Matheus Costa, Web Designer Front-end
        </motion.small>
      </section>
    </main>
  );
}
