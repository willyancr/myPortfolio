import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { Project } from "../types/page-infos";

interface Props {
  handleCloseModalCard: () => void;
  project: Project;
}

export default function ModalCards({ handleCloseModalCard, project }: Props) {
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
          src={project.imageProject.url}
          alt="imagem da aplicação Tripplan"
          width={740}
          height={540}
          quality={100}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <RichText content={project.descriptonProjectFull.raw} />
        </div>
      </div>
    </div>
  );
}
