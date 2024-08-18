import Link from "next/link";
import Redirect from "./redirect";

export default function HeaderPage() {
  return (
    <header className="fixed top-0 z-50 block w-full bg-[#101A21] py-6 text-gray-300">
      <nav className="container flex items-center justify-between gap-2">
        <Link href="#initial">
          <h1 className="font-monoton text-5xl">W</h1>
        </Link>
        <div className="flex items-center gap-3 font-mono text-sm sm:gap-6 sm:text-base">
          <Redirect href="#sobre">Sobre</Redirect>
          <Redirect href="#projetos">Projetos</Redirect>
          <Redirect href="#contato">Contato</Redirect>
        </div>
      </nav>
    </header>
  );
}
