import { renderContent } from "@/app/lib/renderContent";
import { DataProject } from "@/app/types/project";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";

interface Props {
  handleCloseModalCard: () => void;
  data: DataProject;
}

export default function ModalCardProject({
  handleCloseModalCard,
  data,
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
          src={data.capa.url}
          alt="imagem da aplicação Tripplan"
          width={740}
          height={540}
          quality={100}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          {data.descricaoModal.map((desc, index) => (
            <div key={index}>{renderContent(desc)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
