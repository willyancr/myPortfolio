import SideBarSocial from "@/app/components/sidebar-social";

export default function HomePage() {
  return (
    <main className="container flex h-[600px]">
      <SideBarSocial />
      <div className="m-auto flex w-[550px] flex-col">
        <div className="flex items-center">
          <span className="font-mono text-xl">🖐️ Olá, meu nome é</span>
          <div className="ml-auto w-[280px] border-b-[6px] border-green-400" />
        </div>

        <span className="font-rubik text-[70px] uppercase">Willyan Costa</span>
        <span className="ml-auto font-mono text-2xl text-green-300">
          Desenvolvedor Front-End
        </span>
      </div>
    </main>
  );
}
