"use client";

import { motion } from "framer-motion";
import CardComponent from "@/components/CardComponent";
import ProjectCard from "@/components/ProjectCard";
import { RxPencil2, RxLightningBolt, RxMagnifyingGlass } from "react-icons/rx";

// Dados dos Serviços
const servicesData = [
  // ... (seus dados de serviço aqui)
];

// Dados do Portfólio
const portfolioData = [
  // ... (seus dados de portfólio aqui)
];

export default function Page() {
  // --- 1. FUNÇÃO DE CONVERSÃO ---
  // Esta função será chamada quando um botão de contato for clicado.
  const handleConversion = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17583189019/IJE5CKiziZ4bEJVYqMBB", // ID do seu evento de clique
      });
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
          onClick={handleConversion} // --- 2. ADICIONADO O ONCLICK ---
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
        {/* ... (código da seção de serviços inalterado) ... */}
      </section>

      {/* Seção de Portfólio */}
      <section id="portfolio" className="w-full px-6 py-16 sm:px-8 md:py-24">
        {/* ... (código da seção de portfólio inalterado) ... */}
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
            onClick={handleConversion} // --- 2. ADICIONADO O ONCLICK ---
            className="cta mt-8 inline-block rounded-full bg-cyan-h px-8 py-3 text-base font-semibold text-dark shadow-lg shadow-cyan-h/50 transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-4 sm:text-lg"
          >
            Peça um Orçamento Grátis
          </motion.a>
        </div>
      </section>
    </main>
  );
}
