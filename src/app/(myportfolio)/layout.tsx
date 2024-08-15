import HeaderPage from "../components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section >
      {children}
    </section>
  );
}
