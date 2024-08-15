"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utilis";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function Redirect({ children, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-all hover:text-zinc-50",
        isActive && "font-medium text-zinc-50",
      )}
    >
      <span className="text-green-400">#</span>
      {children}
    </Link>
  );
}
