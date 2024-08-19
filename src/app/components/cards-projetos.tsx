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
import { AboutPageInfo } from "../types/page-infos";
import { RichText } from "./rich-text";

export default function CardsProjetos({
  projectData,
}: {
  projectData: AboutPageInfo;
}) {
  const [modalCard, setModalCard] = useState(false);

  const handleModalCard = () => setModalCard(true);
  const handleCloseModalCard = () => setModalCard(false);

  return (
    <div className="shadowCards relative h-[420px] w-[287px] rounded-3xl bg-cards p-3 shadow-xl transition duration-300">
      {projectData.highlightProjects.map((item) => (
        <div key={item.slug} className="flex flex-col gap-2">
          <div className="relative w-full">
            <button onClick={handleModalCard}>
              <Image
                src={item.imageProject.url}
                alt="imagem da aplicação Tripplan"
                width={287}
                height={300}
                quality={100}
                className="h-[187px] rounded-2xl transition duration-300 hover:scale-105"
              />

              <FaArrowUpRightFromSquare className="absolute bottom-4 left-3 text-zinc-200/30" />
            </button>
          </div>

          <span>{item.titleProject}</span>

          <span className="text-sm text-gray-400">
            <RichText content={item.descriptonProject.raw} />
          </span>

          <div className="mb-2 flex flex-wrap gap-1 text-xs">
            {item.skill.map((skill) => (
              <Badge key={skill.name}>{skill.name}</Badge>
            ))}
          </div>

          <div className="flex gap-2 text-sm text-gray-400">
            <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
              <FaGithub />
              <a href={item.gitHubUrl} target="_blank" rel="noreferrer">
                Repositório
              </a>
            </button>
            <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
              <FaCircleChevronRight />
              <a href={item.deployUrl} target="_blank" rel="noreferrer">
                Projeto Online
              </a>
            </button>
          </div>
        </div>
      ))}
      {modalCard && <ModalCards handleCloseModalCard={handleCloseModalCard} projectData={projectData} />}
    </div>
  );
}
