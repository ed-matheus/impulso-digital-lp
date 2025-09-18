export default function Page() {
  return (
    <main className="d-flex justify-center items-center min-h-screen bg-dark p-4">
      
      <div className="max-w-3xl">

        {/* Título Principal */}
        <h1 className="text-4xl font-bold text-branco-gelo md:text-6xl lg:text-7xl">
          Tenha um Site Profissional que Conquista Clientes
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg text-branco-gelo/80 md:text-xl">
          Crio sites modernos e rápidos para profissionais liberais e pequenas empresas que desejam mais visibilidade e credibilidade online.
        </p>

        {/* Botão de Ação (CTA) */}
        <a
          href="https://wa.me/55SEUNUMERO" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-cyan px-10 py-4 text-lg font-semibold text-light shadow-lg transition-transform duration-200 hover:scale-105"
        >
          Peça um Orçamento Grátis
        </a>
        
      </div>
    </main>
  );
}
