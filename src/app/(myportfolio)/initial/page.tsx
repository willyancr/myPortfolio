import SideBarSocial from "@/app/components/sidebar-social";

export default function InitialSection() {
  return (
    <div id="initial" className="container flex">
      <SideBarSocial />
      <div className="m-auto flex w-full flex-col justify-center gap-2 md:h-screen md:w-[550px] md:gap-8">
        <div className="flex items-center">
          <span className="font-mono text-sm md:text-xl">
            🖐️ Olá, meu nome é
          </span>
          <div className="ml-auto w-[90px] border-b-[6px] border-green-400 md:w-[280px]" />
        </div>

        <span className="font-rubik text-2xl uppercase md:text-[70px]">
          Willyan Costa
        </span>
        <span className="ml-auto font-mono text-green-300 md:text-2xl">
          Desenvolvedor Front-End
        </span>
      </div>
    </div>
  );
}
