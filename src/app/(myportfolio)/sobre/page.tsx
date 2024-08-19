import { FaDownload, FaPaperPlane } from "react-icons/fa6";
import Button from "@/app/components/button";
import Badge from "@/app/components/badge";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPageData } from "@/app/lib/get-page-data";
import { RichText } from "@/app/components/rich-text";

export const metadata: Metadata = {
  title: "Sobre",
};

export default async function About() {
  const { page: pageData } = await getPageData();

  return (
    <div id="sobre" className="container space-y-10 pb-24 pt-28 md:space-y-20">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Sobre
      </h1>
      <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:gap-0">
        <div className="flex w-full flex-col gap-6 md:w-[500px]">
          <div>
            <span className="font-mono text-green-400">Olá, meu nome é </span>
            <h2 className="font-rubik text-4xl">Willyan Costa</h2>
          </div>
          <div className="font-mono">
            <RichText content={pageData.description.raw} />
          </div>

          <div className="mb-6 flex flex-wrap gap-1 md:mb-0 md:gap-3">
            {pageData.skill.map((item) => (
              <Badge key={item.name}>{item.name}</Badge>
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
              <p className="text-zinc-950">Download C.V </p>
              <FaDownload className="size-4 text-zinc-900" />
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={pageData.profilePerfil.url}
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
