import Link from "next/link";
import Redirect from "./redirect";

export default function HeaderPage() {
  return (
    <header className="pt-6 pb-12 font-mono text-gray-300">
      <nav className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="font-monoton text-5xl">W</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm sm:gap-8 sm:text-base">
          <Redirect href="/projetos">Projetos</Redirect>
          <Redirect href="/sobre">Sobre</Redirect>
          <Redirect href="/contato">Contato</Redirect>
        </div>
      </nav>
    </header>
  );
}
