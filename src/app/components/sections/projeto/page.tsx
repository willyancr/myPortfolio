"use client";

import ModalCardProject from "./modal-card-project";
import { DataProject } from "@/app/types/project";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "@/app/lib/axios";
import Badge from "../../badge";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCircleChevronRight,
  FaGithub,
} from "react-icons/fa6";

export default function ProjectPage() {
  const [modalCard, setModalCard] = useState<number | null>(null);
  const [data, setData] = useState<DataProject[]>([]);

  useEffect(() => {
    api
      .get(
        "/projetos?filters[destaque][$eq]=true&pagination[limit]=6&sort[0]=createdAt:asc&populate=*",
      )
      .then((response) => {
        setData(response.data.data);
      });
  }, []);

  const handleModalCard = (id: number) => setModalCard(id);
  const handleCloseModalCard = () => setModalCard(null);

  return (
    <div id="projetos" className="container space-y-20 pb-20 pt-28">
      <div className="flex flex-col items-center justify-between gap-4 font-mono sm:flex-row sm:gap-0">
        <h1 className="text-3xl sm:text-4xl">
          <span className="text-green-400">#</span>
          Projetos
        </h1>
        <Link href="/projetos" className="flex items-center gap-2 text-sm">
          +Projetos
          <FaArrowRight className="text-green-400" />
        </Link>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, delay: 0.3 + index * 0.1 }}
            key={project.id}
            className="shadowCards relative h-[445px] w-full max-w-[277px] rounded-3xl bg-cards p-3 shadow-xl transition duration-300"
          >
            <div className="flex flex-col gap-2">
              <div className="relative w-full text-center">
                <button onClick={() => handleModalCard(project.id)}>
                  <Image
                    src={project?.capa?.url}
                    alt="imagem da aplicação"
                    width={500}
                    height={500}
                    quality={100}
                    className="h-[187px] w-[230px] rounded-2xl transition duration-300 hover:scale-105"
                  />

                  <FaArrowUpRightFromSquare className="absolute bottom-4 left-7 text-zinc-600" />
                </button>
              </div>

              <span>{project.titulo}</span>

              <span className="h-[75px] overflow-hidden text-sm text-gray-400">
                {project.descricao.map((desc) =>
                  desc.children.map((child, index) => (
                    <span
                      key={index}
                      className={`${child.bold ? "font-bold" : ""}`}
                    >
                      {child.text}
                    </span>
                  )),
                )}
              </span>

              <div className="mb-2 flex flex-wrap gap-1 text-xs">
                {project.badge.map((skill) => (
                  <Badge key={skill.id}>{skill.skill}</Badge>
                ))}
              </div>

              <div className="absolute bottom-3 flex gap-2 text-sm text-gray-400">
                <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
                  <FaGithub />
                  <a
                    href={project.linkRespositorio}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositório
                  </a>
                </button>
                <button className="flex items-center gap-2 rounded-md bg-[#101921]/70 p-2 transition duration-300 hover:bg-[#101921] hover:text-green-400">
                  <FaCircleChevronRight />
                  <a href={project.linkDepoy} target="_blank" rel="noreferrer">
                    Projeto Online
                  </a>
                </button>
              </div>
            </div>

            {modalCard === project.id && (
              <ModalCardProject
                handleCloseModalCard={handleCloseModalCard}
                data={project}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
