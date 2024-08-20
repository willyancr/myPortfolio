"use client";
import SideBarSocial from "@/app/components/sidebar-social";
import {
  leftAnimation,
  rightAnimation,
  upAnimation,
} from "@/app/lib/animation";
import { motion } from "framer-motion";

export default function InitialSection() {
  return (
    <div id="initial" className="container  flex justify-center items-center h-screen sm:flex">
      <SideBarSocial />
      <div className="m-auto flex w-full flex-col justify-center gap-2 md:h-screen md:w-[550px] md:gap-8">
        <motion.div {...leftAnimation} className="flex items-center">
          <span className="font-mono text-sm sm:text-xl">
            🖐️ Olá, meu nome é
          </span>
          <div className="ml-auto w-[125px] border-b-[6px] border-green-400 md:w-[280px]" />
        </motion.div>
        <motion.div {...rightAnimation}>
          <span className="font-rubik text-6xl uppercase md:text-[70px]">
            Willyan Costa
          </span>
        </motion.div>
        <motion.div
          {...upAnimation}
          className="ml-auto font-mono text-green-300 sm:text-2xl"
        >
          <span>Desenvolvedor Front-End</span>
        </motion.div>
      </div>
    </div>
  );
}
