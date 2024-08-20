import { motion } from "framer-motion";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof motion.span> {
  children: React.ReactNode;
}

export default function Badge({ children, ...props }: Props) {
  return (
    <motion.span
      className="w-fit rounded-md bg-green-900 px-1 py-0.5 text-green-400"
      {...props}
    >
      {children}
    </motion.span>
  );
}
