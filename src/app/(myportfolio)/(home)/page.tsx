import HeaderPage from "@/app/components/header";
import { getAboutHygraph } from "@/app/services/get-about-hygraph";
import { getProjectsHygraph } from "@/app/services/get-projects-hygraph";
import Contact from "../contato/page";
import InitialSection from "../initial/page";
import ProjectPage from "../projetos/page";
import About from "../sobre/page";

export default async function HomePage() {
  return (
    <div>
      <HeaderPage />

      <InitialSection />
      <About />
      <ProjectPage />
      <Contact />
    </div>
  );
}
