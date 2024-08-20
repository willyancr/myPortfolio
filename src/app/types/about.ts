import type { RichTextContent } from "@graphcms/rich-text-types";

export interface SkillInfo {
  name: string;
}

export interface AboutPageInfo {
  description: {
    raw: RichTextContent;
  };
  skill: SkillInfo[];
  profilePhoto: {
    url: string;
  };
}

export interface AboutPageData {
  about: AboutPageInfo;
}
