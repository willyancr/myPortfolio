interface Props {
  children: React.ReactNode;
}

export default function Badge({ children }: Props) {
  return (
    <>
      <span className="w-fit rounded-md bg-green-900 px-1 py-0.5 text-green-400">
        {children}
      </span>
    </>
  );
}
