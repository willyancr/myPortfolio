import type { RichTextContent } from "@graphcms/rich-text-types";

export interface SkillInfo {
  name: string;
}

export interface Project {
  slug: string;
  imageProject: {
    url: string;
  };
  titleProject: string;
  descriptonProject: {
    raw: RichTextContent;
  };
  descriptonProjectFull: {
    raw: RichTextContent;
  };
  gitHubUrl: string;
  deployUrl: string;
  skill: SkillInfo[];
}

export interface AboutPageInfo {
  description: {
    raw: RichTextContent;
  };
  skill: SkillInfo[];
  profilePerfil: {
    url: string;
  };
  highlightProjects: Project[];
}

export interface AboutPageData {
  page: AboutPageInfo;
}
