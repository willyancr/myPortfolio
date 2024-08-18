"use client";
import {
  FaCircleChevronRight,
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Image from "next/image";
import Badge from "./badge";
import { useState } from "react";
import ModalCards from "./modal-cards";

export default function CardsProjetos() {
  const [modalCard, setModalCard] = useState(false);

  const handleModalCard = () => setModalCard(true);
  const handleCloseModalCard = () => setModalCard(false);

  return (
    <div>
      <div className="shadowCards relative h-[420px] w-[287px] rounded-3xl bg-cards p-3 shadow-xl transition duration-300">
        <div className="flex flex-col gap-2">
          <div className="relative w-full">
            <button onClick={handleModalCard}>
              <Image
                src="/page-tripplan.png"
                alt="imagem da aplicação Tripplan"
                width={287}
                height={300}
                quality={100}
                className="h-[187px] rounded-2xl"
              />

              <FaArrowUpRightFromSquare className="absolute bottom-4 left-3 text-zinc-200/30" />
            </button>
          </div>

          <span>Tripplan</span>

          <span className="text-sm text-gray-400">
            Uma aplicação web para organizar e centralizar todos os detalhes do
            seu planejamento de viagem.
          </span>

          <div className="mb-2 flex flex-wrap gap-1 text-xs">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>TailwindCSS</Badge>
            <Badge>Node.js</Badge>
            <Badge>Fastify</Badge>
            <Badge>Prisma</Badge>
            <Badge>PostgreSQL</Badge>
          </div>

          <div className="flex gap-2 text-sm text-gray-400">
            <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
              <FaGithub />
              Repositório
            </button>
            <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
              <FaCircleChevronRight />
              Projeto Online
            </button>
          </div>
        </div>
        {modalCard && (
          <ModalCards handleCloseModalCard={handleCloseModalCard} />
        )}
      </div>
    </div>
  );
}
