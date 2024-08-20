"use client";
import CardsProjetos from "@/app/components/cards-projetos";
import { Project as ProjectProps } from "@/app/types/page-infos";
import { motion } from "framer-motion";

export default function Project({ projects }: { projects: ProjectProps[] }) {
  return (
    <div id="projetos" className="container space-y-20 pb-20 pt-28">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Projetos
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {projects?.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            key={project.slug}
          >
            <CardsProjetos project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
