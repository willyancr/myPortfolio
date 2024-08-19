import ToasterProvider from "../provaider/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section >
      <ToasterProvider />
      {children}
    </section>
  );
}
