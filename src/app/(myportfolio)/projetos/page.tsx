import Cards from '@/app/components/cards-projetos';

export default function ProjetosPage() {
  return (
    <div className="container space-y-8">
      <h1 className="font-mono text-4xl ml-10">
        <span className="text-green-400">#</span>
        Projetos
      </h1>
      <Cards />
    </div>
  );
}
