import HeaderPage from "../components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bgbody h-screen">
      <HeaderPage />
      {children}
    </section>
  );
}
