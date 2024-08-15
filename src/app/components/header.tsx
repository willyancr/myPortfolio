import Link from "next/link";
import Redirect from "./redirect";

export default function HeaderPage() {
  return (
    <header>
      <nav className="container fixed top-0 z-50 flex items-center justify-between bg-[#101A21] py-6 text-gray-300">
        <div>
          <Link href="/">
            <h1 className="font-monoton text-5xl">W</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2 pr-10 font-mono text-sm sm:gap-6 sm:text-base">
          <Redirect href="/sobre">Sobre</Redirect>
          <Redirect href="/projetos">Projetos</Redirect>
          <Redirect href="/contato">Contato</Redirect>
        </div>
      </nav>
    </header>
  );
}
