"use client";
import CardDogsFeed from "@/app/components/cards-projetos/card-dogs-feed";
import CardLandingPageArtur from "@/app/components/cards-projetos/card-landing-page-artur";
import CardMyTodoList from "@/app/components/cards-projetos/card-mytodolist";
import CardTripplan from "@/app/components/cards-projetos/card-tripplan";
import { motion } from "framer-motion";

export default function ProjectPage() {
  return (
    <div id="projetos" className="container space-y-20 pb-20 pt-28">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Projetos
      </h1>
      
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-10">
        
          <CardTripplan />
          <CardDogsFeed />
          <CardLandingPageArtur />
          <CardMyTodoList />
        </motion.div>
      
    </div>
  );
}
