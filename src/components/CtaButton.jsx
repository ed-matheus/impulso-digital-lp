import { motion } from "framer-motion";

// Ícone do Whatsapp
import { RiWhatsappLine } from "react-icons/ri";

const CtaButton = ({ text }) => {
  // Função que vai disparar a conversão
  const handleWhatsAppConversion = () => {
    // Verifica se o gtag existe (para não quebrar em dev, etc.)
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17583189019/IJE5CK1ziZ4BEJvYqMBB",
      });
    }
  };

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      href="https://wa.me/5511943834648"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppConversion}
      className="cta flex items-center gap-2 mt-6 rounded-full bg-cyan-h px-8 py-3 text-base font-semibold text-dark shadow-lg shadow-cyan-h/50 transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-4 sm:text-lg"
    >
      <RiWhatsappLine />
      {text}
    </motion.a>
  );
};

export default CtaButton;
