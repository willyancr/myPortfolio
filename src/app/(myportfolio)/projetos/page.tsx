import CardsProjetos from "@/app/components/cards-projetos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function ProjetosPage() {
  return (
    <div className="container mb-6 space-y-8">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Projetos
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <CardsProjetos />
        <CardsProjetos />
        <CardsProjetos />
      </div>
    </div>
  );
}
