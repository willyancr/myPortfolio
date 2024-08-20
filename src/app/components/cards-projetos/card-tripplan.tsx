"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCircleChevronRight,
  FaGithub,
} from "react-icons/fa6";
import Badge from "../badge";
import ModalCardTripplan from "./modal-card-tripplan";

export default function CardTripplan() {
  const [modalCard, setModalCard] = useState(false);

  const handleModalCard = () => setModalCard(true);
  const handleCloseModalCard = () => setModalCard(false);

  return (
    <div className="shadowCards relative h-[445px] w-[287px] rounded-3xl bg-cards p-3 shadow-xl transition duration-300">
      <div className="flex flex-col gap-2">
        <div className="relative w-full">
          <button onClick={handleModalCard}>
            <Image
              src="/page-tripplan.png"
              alt="imagem da aplicação Tripplan"
              width={287}
              height={300}
              quality={100}
              className="h-[187px] rounded-2xl transition duration-300 hover:scale-105"
            />

            <FaArrowUpRightFromSquare className="absolute bottom-4 left-3 text-zinc-200/30" />
          </button>
        </div>

        <span>Tripplan</span>

        <span className="h-[75px] overflow-hidden text-sm text-gray-400">
          Uma aplicação web para organizar e centralizar todos os detalhes do
          seu planejamento de viagem.
        </span>

        <div className="mb-2 flex flex-wrap gap-1 text-xs">
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>TailwindCSS</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Prisma</Badge>
          <Badge>Node.js</Badge>
          <Badge>Fastify</Badge>
          <Badge>PostgreSQL</Badge>
        </div>

        <div className="absolute bottom-3 flex gap-2 text-sm text-gray-400">
          <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
            <FaGithub />
            <a
              href="https://github.com/willyancosta/tripplan"
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          </button>
          <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
            <FaCircleChevronRight />
            <a
              href="https://tripplan-app.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Projeto Online
            </a>
          </button>
        </div>
      </div>

      {modalCard && <ModalCardTripplan handleCloseModalCard={handleCloseModalCard} />}
    </div>
  );
}
