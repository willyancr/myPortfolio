"use client";
import Badge from "@/app/components/badge";
import Button from "@/app/components/button";
import { leftAnimation, scaleAnimation } from "@/app/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaPaperPlane } from "react-icons/fa6";

export default function About() {
  return (
    <div id="sobre" className="container space-y-10 pb-24 pt-28 md:space-y-20">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Sobre
      </h1>
      <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:gap-0">
        <div className="flex w-full flex-col gap-6 md:w-[500px]">
          <motion.div {...leftAnimation} className="flex flex-col gap-6">
            <div>
              <span className="font-mono text-green-400">Olá, meu nome é </span>
              <h2 className="font-rubik text-4xl">Willyan Costa</h2>
            </div>
            <div className="font-mono">
              👋 Olá! Sou Willyan Costa, desenvolvedor front-end com mais de 1
              ano de experiência, atualmente mergulhando no universo full-stack.
              Apaixonado por tecnologia, estou sempre em busca de novos desafios
              e oportunidades para expandir meus conhecimentos. Estou em
              constante aprendizado, explorando novas tecnologias e aprimorando
              minhas habilidades para oferecer soluções inovadoras e eficientes.
              Vamos criar algo incrível juntos? 🚀
            </div>
          </motion.div>

          <div className="mb-6 flex flex-wrap gap-1 md:mb-0 md:gap-2">
            {[
              "React",
              "Next.js",
              "TailwindCSS",
              "JavaScript",
              "TypeScript",
              "Prisma",
              "Node.js",
              "HTML5",
              "CSS3",
            ].map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-3">
            <Link
              href="#contato"
              className="flex items-center justify-center gap-2 rounded-md bg-green-400 p-4 shadow-button transition-all hover:brightness-75 md:my-6 md:w-[225px]"
            >
              <p className="text-zinc-950">Entrar em contato </p>
              <FaPaperPlane className="size-4 text-zinc-900" />
            </Link>
            <Button>
              <a
                href="https://drive.google.com/file/d/16HGIhuRbxcvd5yAHbHAbHfyJ58H9Xc5B/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-zinc-950">Download C.V </p>
                <FaDownload className="size-4 text-zinc-900" />
              </a>
            </Button>
          </div>
        </div>
        <motion.div
          {...scaleAnimation}
          className="flex items-center justify-center"
        >
          <Image
            src="/perfil.png"
            alt="imagem de perfil"
            width={350}
            height={350}
            quality={100}
            className="rounded-full border-4 border-white shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
