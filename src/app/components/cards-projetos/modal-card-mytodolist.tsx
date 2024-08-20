import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

interface Props {
  handleCloseModalCard: () => void;
}

export default function ModalCardMyTodoList({ handleCloseModalCard }: Props) {
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
          src="/mytodolist.png"
          alt="imagem da aplicação Mytodolist"
          width={740}
          height={540}
          quality={100}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <p>
            <strong>My Todo List</strong> é uma ferramenta online que te ajuda a
            organizar suas tarefas e compromissos. Você pode criar listas,
            adicionar tarefas com detalhes, definir prazos e marcar as tarefas
            concluídas.
          </p>

          <h2 className="text-2xl font-bold">Funcionalidades</h2>
          <ul>
            <li>- Adicionar, editar e remover tarefas.</li>
            <li>- Marcar tarefas como concluídas.</li>
            <li>- Filtrar tarefas por status (concluídas/não concluídas).</li>
            <li>- Estatísticas.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
