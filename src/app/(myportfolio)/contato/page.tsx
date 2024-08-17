import Button from "@/app/components/button";
import { Metadata } from "next";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaXTwitter,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contato",
};
export default function Contact() {
  return (
    <div id="contato" className="container space-y-20 pt-10 pb-16">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Contato
      </h1>
      <div className="flex flex-col space-y-12 text-center">
        <div className="text-3xl font-medium">
          <p>Vamos trabalhar juntos?</p>
          <p>Entre em contato comigo!</p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nome"
            className="m-auto w-full rounded-md bg-cards p-4 shadow-2xl outline-none md:w-[450px]"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="m-auto w-full rounded-md bg-cards p-4 shadow-2xl outline-none md:w-[450px]"
          />
          <textarea
            name="mensagem"
            id="mensagem"
            placeholder="Mensagem"
            className="m-auto h-40 w-full resize-none rounded-md bg-cards p-4 shadow-2xl outline-none md:w-[450px]"
          />
          <Button className="m-auto my-6 shadow-none">
            <p className="text-zinc-950">Enviar mensagem</p>
            <FaPaperPlane className="size-4 text-zinc-900" />
          </Button>
          <div className="m-auto w-full border-b border-zinc-600/50 md:w-[450px]" />

          <span>Redes Sociais</span>
          <div className="m-auto my-3 flex gap-6">
            <a
              href="https://github.com/willyancr"
              target="_blank"
              className="transition hover:text-green-400"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/willyancr/"
              target="_blank"
              className="transition hover:text-green-400"
            >
              <FaLinkedinIn className="size-5" />
            </a>
            <a
              href="https://x.com/WillyanCosta"
              target="_blank"
              className="transition hover:text-green-400"
            >
              <FaXTwitter className="size-5" />
            </a>
            <a
              href="https://www.instagram.com/willyan.cr/"
              target="_blank"
              className="transition hover:text-green-400"
            >
              <FaInstagram className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
