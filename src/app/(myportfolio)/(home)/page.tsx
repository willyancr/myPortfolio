import SideBarSocial from '@/app/components/sidebar-social';

export default function HomePage() {
  return (
    <main className="container flex h-[600px]">
      <SideBarSocial />
      <div className="w-[472px] m-auto flex flex-col ">
        <div className="flex items-center">
          <span className="font-mono">🖐️ Olá, meu nome é</span>
          <div className="w-[280px] border-b-[6px] border-green-400 ml-auto" />
        </div>

        <span className="text-[60px] uppercase font-rubik">Willyan Costa</span>
        <span className="font-mono ml-auto text-green-300">
          Desenvolvedor Front-End
        </span>
      </div>
    </main>
  );
}
