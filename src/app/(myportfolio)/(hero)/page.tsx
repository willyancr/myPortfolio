import HeaderPage from "@/app/components/header";
import Contact from "../../components/sections/contato/page";
import InitialSection from "../../components/sections/initial/page";
import ProjectPage from "../../components/sections/projetos/page";
import About from "../../components/sections/sobre/page";

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
