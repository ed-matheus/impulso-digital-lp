import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="p-8">
      <p className="text-sm text-center mb-5">
        © 2025 Matheus Costa - Todos os direitos reservados.
      </p>

      {/* Redes Sociais */}
      <div className="flex justify-center items-center gap-5">
        <button type="button" className="rounded-full bg-cyan-h p-2 hover:bg-cyan cursor-pointer">
          <a
            href="https://www.instagram.com/edmatheuss.web/"
            className="text-dark text-xl text-center"
          >
            <RxInstagramLogo />
          </a>
        </button>
        <button type="button" className="rounded-full bg-cyan-h p-2 hover:bg-cyan cursor-pointer">
          <a
            href="https://www.linkedin.com/in/edson-matheus-b5a0171ba/"
            className="text-dark text-xl text-center"
          >
            <RxLinkedinLogo />
          </a>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
