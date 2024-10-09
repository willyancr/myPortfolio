"use client";
import Button from "@/app/components/button";
import RedirectMidiaSocial from "@/app/components/redirect-midia-social";
import { leftAnimation, scaleAnimation } from "@/app/lib/animation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string(),
});
type ContactFormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch {
      toast.error("Ocorreu um erro ao enviar o formulário!");
    }
  };
  return (
    <div id="contato" className="container space-y-20 pb-16 pt-10">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Contato
      </h1>
      <div className="flex flex-col space-y-12 text-center">
        <motion.div {...leftAnimation} className="text-3xl font-medium">
          <p>Vamos trabalhar juntos?</p>
          <p>Entre em contato comigo!</p>
        </motion.div>
        <motion.form
          {...scaleAnimation}
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-2"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Nome"
            className="m-auto w-full rounded-md bg-cards p-4 shadow-2xl outline-none ring-green-400 focus:outline-none focus:ring-1 md:w-[450px]"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="E-mail"
            className="m-auto w-full rounded-md bg-cards p-4 shadow-2xl outline-none ring-green-400 focus:outline-none focus:ring-1 md:w-[450px]"
            maxLength={500}
          />
          <textarea
            {...register("message")}
            placeholder="Mensagem"
            className="m-auto h-40 w-full resize-none rounded-md bg-cards p-4 shadow-2xl outline-none ring-green-400 focus:outline-none focus:ring-1 md:w-[450px]"
          />
          <Button
            type="submit"
            className="m-auto my-6 shadow-none"
            disabled={isSubmitting}
          >
            <p className="text-zinc-950">Enviar mensagem</p>
            <FaPaperPlane className="size-4 text-zinc-900" />
          </Button>
          <div className="m-auto w-full border-b border-zinc-600/50 md:w-[450px]" />

          <span>Redes Sociais</span>
          <div className="m-auto my-3 flex gap-6">
            <RedirectMidiaSocial href="https://github.com/willyancr">
              <FaGithub className="size-5" />
            </RedirectMidiaSocial>
            <RedirectMidiaSocial href="https://www.linkedin.com/in/willyancr/">
              <FaLinkedinIn className="size-5" />
            </RedirectMidiaSocial>
            <RedirectMidiaSocial href="https://x.com/WillyanCosta">
              <FaXTwitter className="size-5" />
            </RedirectMidiaSocial>
            <RedirectMidiaSocial href="https://www.instagram.com/willyan.cr/">
              <FaInstagram className="size-5" />
            </RedirectMidiaSocial>
            <RedirectMidiaSocial href="https://wa.me/5563984533367">
              <FaWhatsapp className="size-5" />
            </RedirectMidiaSocial>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
