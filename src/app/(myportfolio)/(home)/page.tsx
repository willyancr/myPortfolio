import HeaderPage from "@/app/components/header";
import { getPageData } from "@/app/lib/get-page-data";
import Contact from "../contato/page";
import InitialSection from "../initial/page";
import ProjectPage from "../projetos/page";
import About from "../sobre/page";

export default async function HomePage() {
  const { page: pageData } = await getPageData();
  return (
    <div>
      <HeaderPage />

      <InitialSection />
      <About aboutInfo={pageData} />
      <ProjectPage projects={pageData.highlightProjects} />
      <Contact />
    </div>
  );
}
