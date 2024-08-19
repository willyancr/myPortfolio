import { AboutPageData } from "../types/page-infos";
import { fetchHygraphQuery } from "./fetch-hygraph-query";

export const getPageData = async (): Promise<AboutPageData> => {
  const query = `
  query MyQuery {
  page(where: {slug: "about"}) {
    description {
      raw
    }
    skill {
      name
    }
    profilePerfil {
      url
    }
    highlightProjects {
      slug
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
    }
  }
}
  `;

  return await fetchHygraphQuery(query);
};
