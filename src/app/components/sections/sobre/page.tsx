"use client";
import { leftAnimation, scaleAnimation } from "@/app/lib/animation";
import { FaDownload, FaPaperPlane } from "react-icons/fa6";
import Button from "@/app/components/button";
import Badge from "@/app/components/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DataAbout } from "@/app/types/about";
import api from "@/app/lib/axios";

export default function About() {
  const [data, setData] = useState<DataAbout[]>([]);

  useEffect(() => {
    api.get("/sobres?populate=*").then((response) => {
      setData(response.data.data);
    });
  }, []);
  return (
    <div id="sobre" className="container space-y-10 pb-24 pt-28 md:space-y-20">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Sobre
      </h1>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:gap-0"
        >
          <div className="flex w-full flex-col gap-6 md:w-[500px]">
            <motion.div {...leftAnimation} className="flex flex-col gap-6">
              <div>
                <span className="font-mono text-green-400">
                  Olá, meu nome é{" "}
                </span>
                <h2 className="font-rubik text-4xl">Willyan Costa</h2>
              </div>

              <div className="font-mono">
                {item.descricao.map((desc, index) => (
                  <p key={index} className="font-mono">
                    {desc.children.map((child, index) => (
                      <span
                        key={index}
                        className={`${child.bold ? "font-bold" : ""}`}
                      >
                        {child.text}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="mb-6 flex flex-wrap gap-1 md:mb-0 md:gap-2">
              {item.badge.map((badge) => (
                <Badge key={badge.id}>{badge.skill}</Badge>
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
                  href={item.linkCV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
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
              src={`${process.env.NEXT_PUBLIC_URL_IMAGE}${item.fotoPerfil.url}`}
              alt="imagem de perfil"
              width={350}
              height={350}
              quality={100}
              className="rounded-full border-4 border-white shadow-2xl"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
