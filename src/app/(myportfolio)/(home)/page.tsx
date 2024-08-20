import HeaderPage from "@/app/components/header";
import Contact from "../contato/page";
import InitialSection from "../initial/page";
import Project from "../projetos/page";
import About from "../sobre/page";
import { getPageData } from "@/app/lib/get-page-data";

export default async function HomePage() {
  const { page: pageData  } = await getPageData();
  return (
    <div>
      <HeaderPage />

      <InitialSection />
      <About aboutInfo={pageData} />
      <Project projects={pageData.highlightProjects} />
      <Contact />
    </div>
  );
}
