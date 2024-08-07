interface Props {
  children: React.ReactNode;
}

export default function Badge({ children }: Props) {
  return (
    <>
      <span className="bg-green-400 text-zinc-950 font-medium px-1 py-0.5 rounded-md">
        {children}
      </span>
    </>
  );
}
