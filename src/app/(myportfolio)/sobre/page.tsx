import Badge from "@/app/components/badge";
import Button from "@/app/components/button";
import { Metadata } from "next";
import Image from "next/image";
import { FaDownload, FaPaperPlane } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function About() {
  return (
    <div className="container space-y-10 pb-24 pt-10 md:space-y-20">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Sobre
      </h1>
      <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:gap-0">
        <div className="flex w-full flex-col md:w-[500px]">
          <div>
            <span className="font-mono text-green-400">Olá, meu nome é </span>
            <h2 className="font-rubik text-4xl">Willyan Costa</h2>
          </div>
          <span className="my-6 font-mono text-zinc-300 md:w-[500px]">
            👋 Olá! Sou{" "}
            <span className="font-semibold text-white">Willyan Costa</span>,
            desenvolvedor front-end com mais de 1 ano de experiência, atualmente
            mergulhando no universo full-stack. Apaixonado por tecnologia, estou
            sempre em busca de novos desafios e oportunidades para expandir meus
            conhecimentos. Estou em constante aprendizado, explorando novas
            tecnologias e aprimorando minhas habilidades para oferecer soluções
            inovadoras e eficientes. Vamos criar algo incrível juntos? 🚀
          </span>
          <div className="mb-6 flex flex-wrap gap-1 md:mb-0 md:gap-3">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TailwindCSS</Badge>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Prisma</Badge>
            <Badge>Node.js</Badge>
            <Badge>HTML5</Badge>
            <Badge>CSS3</Badge>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-3">
            <Button>
              <p className="text-zinc-950">Entrar em contato </p>
              <FaPaperPlane className="size-4 text-zinc-900" />
            </Button>
            <Button>
              <p className="text-zinc-950">Download C.V </p>
              <FaDownload className="size-4 text-zinc-900" />
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/perfil.png"
            alt="imagem de perfil"
            width={350}
            height={350}
            quality={100}
            className="rounded-full border-4 border-white shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
