import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-04-14",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

const sanityFetch = async (dataType, getAll = false) => {
  const query = `*[_type == "${dataType}" ${getAll ? "" : "&& known == true"}] | order(order asc)`;
  
  const data = client.fetch(query);

  return data;
};

export const sanityFetchProjects = () => {
  const groq = `*[_type == 'projects'] {
    _id, imageSrc, title, order, "description": description[].children[].text,
    repoLink, demoLink,
    usedTechs[]->{_id, imageSrc, order, techName} | order(order asc)
  } | order(order asc)`;

  const projectsData = client.fetch(groq);

  return projectsData;
};

export default sanityFetch;