import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function SideBarSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="hidden sm:flex sm:h-[800px]"
    >
      <aside className="flex min-w-16 flex-col-reverse gap-6 pl-3 sm:flex">
        <a
          href="https://x.com/WillyanCosta"
          target="_blank"
          className="transition hover:text-green-400"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/willyan.cr/"
          target="_blank"
          className="transition hover:text-green-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/willyancr"
          target="_blank"
          className="transition hover:text-green-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/willyancr/"
          target="_blank"
          className="transition hover:text-green-400"
        >
          <FaLinkedinIn className="size-5" />
        </a>
      </aside>
    </motion.div>
  );
}
