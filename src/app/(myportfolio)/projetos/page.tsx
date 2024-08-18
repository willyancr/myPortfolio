import CardsProjetos from "@/app/components/cards-projetos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function Project() {
  return (
    <div id="projetos" className="container space-y-20 pb-20 pt-28">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Projetos
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <CardsProjetos />
        <CardsProjetos />
        <CardsProjetos />
        <CardsProjetos />
        <CardsProjetos />
        <CardsProjetos />
      </div>
    </div>
  );
}
