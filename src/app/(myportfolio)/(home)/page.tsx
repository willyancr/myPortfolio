import HeaderPage from "@/app/components/header";
import Contact from "../contato/page";
import InitialSection from "../initial/page";
import Project from "../projetos/page";
import About from "../sobre/page";

export default async function HomePage() {
  return (
    <div>
      <HeaderPage />

      <InitialSection />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
