import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

interface Props {
  handleCloseModalCard: () => void;
}

export default function ModalCards({ handleCloseModalCard }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 text-zinc-300">
      <div className="h-[580px] w-[380px] space-y-6 overflow-y-auto rounded-xl bg-cards px-6 py-5 text-left drop-shadow-2xl sm:mt-[80px] sm:h-[740px] sm:w-[740px]">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Detalhes do projeto</span>
          <button onClick={handleCloseModalCard}>
            <FaXmark className="size-6" />
          </button>
        </div>
        <Image
          src="/page-tripplan.png"
          alt="imagem da aplicação Tripplan"
          width={740}
          height={540}
          quality={100}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <span>
            O Tripplan é uma aplicação web em desenvolvimento para facilitar o
            planejamento de viagens. Com ele, você pode organizar todos os
            detalhes da sua viagem, desde a escolha do destino, criação de
            atividades até o gerenciamento dos convidados. A ferramenta é ideal
            para quem deseja manter todas as informações da viagem centralizadas
            em um único lugar.
          </span>
          <div className="mb-4">
            <h1 className="mb-2 border-b border-zinc-700 text-xl font-medium">
              Funcionalidades
            </h1>

            <ul className="space-y-2">
              <li>
                🌍 Planejamento de Viagens: Colete e organize informações
                essenciais, como destino e datas de ida e volta.
              </li>
              <li>
                👥 Gerenciamento de Convidados: Adicione nomes e e-mails dos
                convidados para manter todos informados.
              </li>
              <li>
                📝 Cadastro de Atividades: Planeje e registre todas as
                atividades previstas para a viagem.
              </li>
              <li>
                🔗 Links Úteis: Adicione e organize links que possam ser
                relevantes para a viagem.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
