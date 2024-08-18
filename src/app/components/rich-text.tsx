import { RichText as RichTextCMS } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

interface RichTextProps extends ComponentProps<typeof RichTextCMS> {}

export const RichText = ({ ...props }: RichTextProps) => {
  return <RichTextCMS {...props} />;
};
