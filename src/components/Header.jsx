import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full mb-5 p-8 flex flex-col md:flex-row md:px-20 lg:px-30 xl:px-45 gap-3 justify-between items-center">
      <h2 className="font-[500] text-xl text-cyan mb-2">Matheus Costa</h2>

      <ul className="flex gap-8 font-[500]">
        <li className="hover:text-cyan">
          <Link href="#servicos">Serviços</Link>
        </li>

        <li className="hover:text-cyan">
          <Link href="#portfolio">Portfólio</Link>
        </li>
        
        <li className="hover:text-cyan">
          <Link href="#contato">Contato</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
