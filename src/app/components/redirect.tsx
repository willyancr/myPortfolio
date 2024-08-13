import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function Redirect({ children, href }: Props) {
  return (
    <>
      <Link href={href} className="transition-all hover:text-gray-100">
        {children}
      </Link>
    </>
  );
}
