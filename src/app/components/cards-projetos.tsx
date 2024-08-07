import Image from 'next/image';
import { FaCircleChevronRight, FaGithub } from 'react-icons/fa6';
import Badge from './badge';

export default function Cards() {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center">
      <div className="w-[287px] h-[420px] bg-cards rounded-3xl shadow-xl shadowCards transition duration-300 p-3">
        <div className="flex flex-col gap-2">
          <Image
            src="/page-tripplan.png"
            alt="logo"
            width={287}
            height={300}
            quality={100}
            className="rounded-2xl h-[187px]"
          />
          <span>Tripplan</span>
          <span className="text-sm text-gray-400">
            Uma aplicação web para organizar e centralizar todos os detalhes do
            seu planejamento de viagem.
          </span>
          <div className="flex flex-wrap gap-1 text-xs mb-2">
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
            <button className="flex items-center gap-2 bg-[#101921] p-2 rounded-md hover:text-zinc-950 hover:bg-green-400 transition duration-300">
              <FaGithub />
              Repositório
            </button>
            <button className="flex items-center gap-2 bg-[#101921] p-2 rounded-md hover:text-zinc-950 hover:bg-green-400 transition duration-300">
              <FaCircleChevronRight />
              Deploy
            </button>
          </div>
        </div>
      </div>
      <div className="w-[287px] h-[420px] bg-cards rounded-3xl shadow-xl shadowCards transition duration-300 p-3">
        <div className="flex flex-col gap-2">
          <Image
            src="/page-tripplan.png"
            alt="logo"
            width={287}
            height={300}
            quality={100}
            className="rounded-2xl h-[187px]"
          />
          <span>Tripplan</span>
          <span className="text-sm text-gray-400">
            Uma aplicação web para organizar e centralizar todos os detalhes do
            seu planejamento de viagem.
          </span>
          <div className="flex flex-wrap gap-1 text-xs mb-2">
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
            <button className="flex items-center gap-2 bg-[#101921] p-2 rounded-md hover:text-zinc-950 hover:bg-green-400 transition duration-300">
              <FaGithub />
              Repositório
            </button>
            <button className="flex items-center gap-2 bg-[#101921] p-2 rounded-md hover:text-zinc-950 hover:bg-green-400 transition duration-300">
              <FaCircleChevronRight />
              Deploy
            </button>
          </div>
        </div>
      </div>
      <div className="w-[287px] h-[420px] bg-cards rounded-3xl shadow-xl shadowCards transition duration-300 p-3">
        <div className="flex flex-col gap-2">
          <Image
            src="/page-tripplan.png"
            alt="logo"
            width={287}
            height={300}
            quality={100}
            className="rounded-2xl h-[187px]"
          />
          <span>Tripplan</span>
          <span className="text-sm text-gray-400">
            Uma aplicação web para organizar e centralizar todos os detalhes do
            seu planejamento de viagem.
          </span>
          <div className="flex flex-wrap gap-1 text-xs mb-2">
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
            <button className="flex items-center gap-2 bg-[#101921] p-2 rounded-md hover:text-zinc-950 hover:bg-green-400 transition duration-300">
              <FaGithub />
              Repositório
            </button>
            <button className="flex items-center gap-2 bg-[#101921] p-2 rounded-md hover:text-zinc-950 hover:bg-green-400 transition duration-300">
              <FaCircleChevronRight />
              Deploy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
