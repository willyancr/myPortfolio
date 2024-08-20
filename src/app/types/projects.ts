import type { RichTextContent } from "@graphcms/rich-text-types";

export interface SkillInfo {
  name: string;
}

export interface Project {
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
  skill: SkillInfo[];
  gitHubUrl: string;
  deployUrl: string;
  slug: string;
}
export interface ProjectsPageData {
  projects: Project[];
}

export interface ListProjects {
  listProjects: Project[];
}

export interface ProjectPageData {
  pageProject: ListProjects;
}
