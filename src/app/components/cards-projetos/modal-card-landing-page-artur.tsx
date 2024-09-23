import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

interface Props {
  handleCloseModalCard: () => void;
}

export default function ModalCardLandingPageArtur({
  handleCloseModalCard,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 text-zinc-300">
      <div className="modalEffect h-[580px] w-[380px] space-y-6 overflow-y-auto rounded-xl bg-cards px-6 py-5 text-left drop-shadow-2xl sm:h-[840px] sm:w-[740px]">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Detalhes do projeto</span>
          <button onClick={handleCloseModalCard}>
            <FaXmark className="size-6" />
          </button>
        </div>
        <Image
          src="/landing-page-artur-imovel.png"
          alt="imagem da aplicação Landing Page Artur"
          width={740}
          height={540}
          quality={100}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            Landing Page - Consultor Imobiliário
          </h1>
          <p>
            <strong>Landing Page</strong> é uma landing page para um consultor
            imobiliário, desenvolvida usando Next.js e Strapi como CMS.
          </p>
          <h2 className="text-xl font-semibold mb-2">Tecnologias Utilizadas</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Next.js 14</li>
            <li>Strapi: CMS headless para gestão de conteúdo</li>
            <li>Tailwind CSS: Estilização da interface</li>
            <li>Axios: Para chamadas HTTP</li>
            <li>Vercel: Para deploy do frontend</li>
            <li>Render: Para deploy do backend Strapi</li>
            <li>PostgreSQL: Banco de dados utilizado no Strapi</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-2">Funcionalidades</h2>
          <ul className="list-disc list-inside">
            <li>Listagem de Imóveis: Mostra todos os imóveis e galerias de fotos.</li>
            <li>Listagem de Imóveis em destaque: Mostra os imóveis com destaque.</li>
            <li>Imóvel por Slug: Busca e exibe detalhes de um imóvel específico por meio do slug.</li>
            <li>Upload de Imagens: Upload e exibição de imagens de imóveis com suporte a múltiplos formatos e tamanhos.</li>
            <li>Busca por imóveis por categorias: Campos de pesquisa de imóveis por categorias</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
