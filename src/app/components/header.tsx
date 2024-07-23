import Link from 'next/link';

export default function HeaderPage() {
  return (
    <header className="py-6 text-gray-300 font-mono">
      <nav className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="text-5xl font-monoton ">W</h1>
          </Link>
        </div>
        <div className="flex items-center gap-8 font-poppins ">
          <Link href="/sobre" className="hover:text-gray-100 transition">
            <span className="text-green-400">#</span>
            <span>Sobre</span>
          </Link>
          <Link href="/projetos" className="hover:text-gray-100 transition">
            <span className="text-green-400">#</span>
            <span>Projetos</span>
          </Link>
          <Link href="/contato" className="hover:text-gray-100 transition">
            <span className="text-green-400">#</span>
            <span>Contato</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
