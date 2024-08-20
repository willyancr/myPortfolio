"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCircleChevronRight,
  FaGithub,
} from "react-icons/fa6";
import Badge from "../badge";
import ModalCardDogFeed from "./modal-card-dogs-feed";

export default function CardDogsFeed() {
  const [modalCard, setModalCard] = useState(false);

  const handleModalCard = () => setModalCard(true);
  const handleCloseModalCard = () => setModalCard(false);

  return (
    <div className="shadowCards relative h-[445px] w-[287px] rounded-3xl bg-cards p-3 shadow-xl transition duration-300">
      <div className="flex flex-col gap-2">
        <div className="relative w-full">
          <button onClick={handleModalCard}>
            <Image
              src="/dogs-feed.png"
              alt="imagem da aplicação Tripplan"
              width={287}
              height={300}
              quality={100}
              className="h-[187px] rounded-2xl transition duration-300 hover:scale-105"
            />

            <FaArrowUpRightFromSquare className="absolute bottom-4 left-3 text-zinc-200/30" />
          </button>
        </div>

        <span>Dogs Feed</span>

        <span className="h-[75px] overflow-hidden text-sm text-gray-400">
          DogsFeed é uma rede social construída para conectar cães e seus donos,
          permitindo o compartilhamento de fotos e interações entre os usuários.
        </span>

        <div className="mb-2 flex flex-wrap gap-1 text-xs">
          <Badge>React</Badge>
          <Badge>Vite</Badge>
          <Badge>JavaScript</Badge>
          <Badge>CSS</Badge>
        </div>

        <div className="absolute bottom-3 flex gap-2 text-sm text-gray-400">
          <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
            <FaGithub />
            <a
              href="https://github.com/willyancr/DogsFeed"
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          </button>
          <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
            <FaCircleChevronRight />
            <a
              href="https://dogsfeed.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Projeto Online
            </a>
          </button>
        </div>
      </div>

      {modalCard && <ModalCardDogFeed handleCloseModalCard={handleCloseModalCard} />}
    </div>
  );
}
