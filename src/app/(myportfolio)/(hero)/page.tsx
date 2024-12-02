import InitialSection from "../../components/sections/initial/page";
import ProjectPage from "../../components/sections/projeto/page";
import Contact from "../../components/sections/contato/page";
import About from "../../components/sections/sobre/page";
import HeaderPage from "@/app/components/header";

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
