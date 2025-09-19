"use client";

import { motion } from "framer-motion";
import CardComponent from "@/components/CardComponent";
import ProjectCard from "@/components/ProjectCard";
import { RxPencil2, RxLightningBolt, RxMagnifyingGlass } from "react-icons/rx";

// Dados dos Serviços
const servicesData = [
  {
    title: "Design Moderno",
    text: "Desenvolvo sites com visual atraente e responsivo para todos os dispositivos.",
    icon: <RxPencil2 />,
  },
  {
    title: "Performance",
    text: "Sites otimizados para carregamento rápido, garantindo a melhor experiência ao usuário.",
    icon: <RxLightningBolt />,
  },
  {
    title: "SEO-Ready",
    text: "Sua empresa será facilmente encontrada por novos clientes através de estratégias de SEO.",
    icon: <RxMagnifyingGlass />,
  },
];

// Dados do Portfólio
const portfolioData = [
  {
    imageUrl: "/img/meu-site.png",
    title: "Matheus Costa - Meu Portfólio Profissional",
    text: "Desenvolvido com Next.js e Tailwind CSS para máxima performance e design exclusivo.",
    altText: "Imagem do meu site",
  },
  {
    imageUrl: "/img/green-gold.png",
    title: "Loja Virtual Green Gold",
    text: "E-commerce completo com WooCommerce. Colaboração com Pixel12Digital.",
    altText: "Imagem da loja virtual Green Gold",
  },
  {
    imageUrl: "/img/marmoraria-brilhante-print.png",
    title: "Landing Page - Marmoraria Brilhante",
    text: "Página de vendas focada em resultados, com design persuasivo para captação de leads.",
    altText: "Imagem da landing page Marmoraria Brilhante",
  },
];

export default function Page() {
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
          Tenha um Site Profissional que Conquista Clientes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-lg md:text-xl"
        >
          Crio sites modernos e rápidos para profissionais e pequenas empresas
          que desejam mais visibilidade e credibilidade online.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          href="https://wa.me/5511943834648"
          target="_blank"
          rel="noopener noreferrer"
          className="cta mt-6 rounded-full bg-cyan-h px-8 py-3 text-base font-semibold text-dark shadow-lg shadow-cyan-h/50 transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-4 sm:text-lg"
        >
          Peça um Orçamento Grátis
        </motion.a>
      </section>

      {/* Seção de serviços */}
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
            className="text-center text-2xl font-bold md:text-4xl"
          >
            O Que Você Ganha Com um Site Profissional?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 mt-4 text-center font-medium md:mb-16 md:text-xl"
          >
            Mais que um site, uma ferramenta de crescimento para seu negócio.
          </motion.p>

          <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((item, i) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: ignore
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
            className="mb-12 text-center text-2xl font-bold md:mb-16 md:text-4xl"
          >
            Meus Trabalhos
          </motion.h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.map((proj, i) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: ignore
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
        className="w-full bg-light px-6 py-16 text-center text-dark sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold leading-tight md:text-5xl"
          >
            Vamos Tirar Sua Ideia do Papel?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-black/80 md:text-xl"
          >
            Clique no botão abaixo para falarmos no WhatsApp sem compromisso.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            href="https://wa.me/5511943834648"
            target="_blank"
            rel="noopener noreferrer"
            className="cta mt-8 inline-block rounded-full bg-cyan-h px-8 py-3 text-base font-semibold text-dark shadow-lg shadow-cyan-h/50 transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-4 sm:text-lg"
          >
            Peça um Orçamento Grátis
          </motion.a>
        </div>
      </section>
    </main>
  );
}
