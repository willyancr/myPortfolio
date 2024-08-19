import CardsProjetos from "@/app/components/cards-projetos";
import { getPageData } from "@/app/lib/get-page-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
};

export default async function Project() {
  const { page: pageData } = await getPageData();
  return (
    <div id="projetos" className="container space-y-20 pb-20 pt-28">
      <h1 className="font-mono text-4xl">
        <span className="text-green-400">#</span>
        Projetos
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <CardsProjetos projectData={pageData} />
      </div>
    </div>
  );
}
