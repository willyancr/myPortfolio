import { ListProjects } from "../types/projects";
import { fetchHygraphQuery } from "./fetch-hygraph-query";

export const getProjectsHygraph = async (): Promise<ListProjects> => {
  const query = `
    query MyQuery {
  pageProject(where: {slug: "projects"}) {
    listProjects {
      imageProject {
        url
      }
      titleProject
      descriptonProject {
        raw
      }
      descriptonProjectFull {
        raw
      }
      skill {
        name
      }
      gitHubUrl
      deployUrl
      slug
    }
  }
}`;
  const data = await fetchHygraphQuery<{ pageProject: ListProjects }>(query);

  return data.pageProject;
};
