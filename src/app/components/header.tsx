import Redirect from "./redirect";

export default function HeaderPage() {
  return (
    <header className="py-6 font-mono text-gray-300">
      <nav className="container flex items-center justify-between">
        <div>
          <Redirect href="/">
            <h1 className="font-monoton text-5xl">W</h1>
          </Redirect>
        </div>
        <div className="font-poppins flex items-center gap-8">
          <Redirect href="/sobre">
            <span className="text-green-400">#</span>
            Sobre
          </Redirect>
          <Redirect href="/projetos">
            <span className="text-green-400">#</span>
            Projetos
          </Redirect>
          <Redirect href="/contato">
            <span className="text-green-400">#</span>
            Contato
          </Redirect>
        </div>
      </nav>
    </header>
  );
}
