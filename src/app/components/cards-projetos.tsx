"use client";
import {
  FaCircleChevronRight,
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Image from "next/image";
import Badge from "./badge";

export default function Cards() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <div className="shadowCards h-[420px] w-[287px] rounded-3xl bg-cards p-3 shadow-xl transition duration-300">
        <div className="flex flex-col gap-2">
          <div className="relative">
            <button>
              <Image
                src="/page-tripplan.png"
                alt="imagem da aplicação Tripplan"
                width={287}
                height={300}
                quality={100}
                className="h-[187px] rounded-2xl"
              />
            </button>
            <FaArrowUpRightFromSquare className="absolute bottom-4 left-3 text-zinc-200/30" />
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

          <div className="flex gap-2 text-sm">
            <button className="flex items-center gap-2 rounded-md bg-[#101921] p-2 transition duration-300 hover:bg-green-400 hover:text-zinc-950">
              <FaGithub />
              Repositório
            </button>
            <button className="flex items-center gap-2 rounded-md bg-[#101921] p-2 transition duration-300 hover:bg-green-400 hover:text-zinc-950">
              <FaCircleChevronRight />
              Deploy
            </button>
          </div>

        </div>
      </div>
      <div className="shadowCards h-[420px] w-[287px] rounded-3xl bg-cards p-3 shadow-xl transition duration-300">
        <div className="flex flex-col gap-2">
          <Image
            src="/page-tripplan.png"
            alt="logo"
            width={287}
            height={300}
            quality={100}
            className="h-[187px] rounded-2xl"
          />
          <span>Tripplan</span>
          <span className="text-sm text-gray-400">
            Uma aplicação web para organizar e centralizar todos os detalhes do
            seu planejamento de viagem.
          </span>
          <div className="mb-2 flex flex-wrap gap-1 text-xs">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TailwindCSS</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Node.js</Badge>
            <Badge>Fastify</Badge>
            <Badge>Prisma</Badge>
            <Badge>PostgreSQL</Badge>
          </div>
          <div className="flex gap-2 text-sm">
            <button className="flex items-center gap-2 rounded-md bg-[#101921] p-2 transition duration-300 hover:bg-green-400 hover:text-zinc-950">
              <FaGithub />
              Repositório
            </button>
            <button className="flex items-center gap-2 rounded-md bg-[#101921] p-2 transition duration-300 hover:bg-green-400 hover:text-zinc-950">
              <FaCircleChevronRight />
              Deploy
            </button>
          </div>
        </div>
      </div>
      <div className="shadowCards h-[420px] w-[287px] rounded-3xl bg-cards p-3 shadow-xl transition duration-300">
        <div className="flex flex-col gap-2">
          <Image
            src="/page-tripplan.png"
            alt="logo"
            width={287}
            height={300}
            quality={100}
            className="h-[187px] rounded-2xl"
          />
          <span>Tripplan</span>
          <span className="text-sm text-gray-400">
            Uma aplicação web para organizar e centralizar todos os detalhes do
            seu planejamento de viagem.
          </span>
          <div className="mb-2 flex flex-wrap gap-1 text-xs">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TailwindCSS</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Node.js</Badge>
            <Badge>Fastify</Badge>
            <Badge>Prisma</Badge>
            <Badge>PostgreSQL</Badge>
          </div>
          <div className="flex gap-2 text-sm">
            <button className="flex items-center gap-2 rounded-md bg-[#101921] p-2 transition duration-300 hover:bg-green-400 hover:text-zinc-950">
              <FaGithub />
              Repositório
            </button>
            <button className="flex items-center gap-2 rounded-md bg-[#101921] p-2 transition duration-300 hover:bg-green-400 hover:text-zinc-950">
              <FaCircleChevronRight />
              Deploy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
