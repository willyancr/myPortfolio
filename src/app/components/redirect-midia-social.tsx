interface RedirectProps extends React.HTMLProps<HTMLAnchorElement> {}

export default function RedirectMidiaSocial({
  children,
  ...props
}: RedirectProps) {
  return (
    <a target="_blank" className="transition hover:text-green-400" {...props}>
      {children}
    </a>
  );
}
