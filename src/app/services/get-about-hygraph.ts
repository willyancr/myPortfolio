import { AboutPageInfo } from "../types/about";
import { fetchHygraphQuery } from "./fetch-hygraph-query";

export const getAboutHygraph = async (): Promise<AboutPageInfo> => {
  const query = `
    query MyQuery {
  about(where: {slug: "about"}) {
    description {
      raw
    }
    skill {
      name
    }
    profilePhoto {
      url
    }
  }
}`;
const data = await fetchHygraphQuery<{ about: AboutPageInfo }>(query);

  return data.about;
};
