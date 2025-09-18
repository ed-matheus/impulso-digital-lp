import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-8 py-3 border-1 border-red-500 flex flex-col gap-3 justify-between items-center">
      <h2 className="font-[500] text-xl text-cyan">Matheus Costa</h2>

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
