import HeaderPage from '../components/header/page';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderPage />
      {children}
    </section>
  );
}
