import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

interface Props {
  handleCloseModalCard: () => void;
}

export default function ModalCardDogFeed({ handleCloseModalCard }: Props) {
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
          src="/dogs-feed.png"
          alt="imagem da aplicação Tripplan"
          width={740}
          height={540}
          quality={100}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            DogsFeed - Rede Social para Cachorros
          </h1>

          <p>
            <strong>DogsFeed</strong> é uma rede social construída para conectar
            cães e seus donos, permitindo o compartilhamento de fotos e
            interações entre os usuários.
          </p>

          <h2 className="text-2xl font-bold">Tecnologias Utilizadas</h2>
          <ul>
            <li>
              - <strong>Front-end:</strong> React, JavaScript, CSS
            </li>
            <li>
              - <strong>Back-end:</strong> API Externa
            </li>
          </ul>

          <h2 className="text-2xl font-bold">Funcionalidades</h2>

          <h3 className="text-xl font-bold">Página Inicial</h3>
          <ul>
            <li>
              - <strong>Feed de Fotos:</strong> Exibe as fotos dos cachorros em
              um layout atraente.
            </li>
            <li>
              - <strong>Visualização Detalhada:</strong> Ao clicar em uma foto,
              abre uma janela com:
              <ul>
                <li>Nome, idade e peso do cachorro</li>
                <li>Seção de comentários (somente para usuários logados)</li>
              </ul>
            </li>
            <li>
              - <strong>Login/Cadastro:</strong> Opções para acessar a conta ou
              criar uma nova.
            </li>
          </ul>

          <h3 className="text-xl font-bold">Dashboard (Após Login)</h3>
          <ul>
            <li>
              - <strong>Minhas Fotos:</strong> Mostra as fotos postadas pelo
              usuário.
            </li>
            <li>
              - <strong>Estatísticas:</strong> Apresenta informações sobre:
              <ul>
                <li>Número de visualizações por foto</li>
                <li>Gráficos de interação (a definir)</li>
              </ul>
            </li>
            <li>
              - <strong>Upload de Fotos:</strong> Permite adicionar novas fotos
              à rede social.
            </li>
            <li>
              - <strong>Logoff:</strong> Encerra a sessão do usuário.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
