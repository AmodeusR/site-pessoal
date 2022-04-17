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

const sanityFetch = async (dataType) => {
  const query = `*[_type == "${dataType}"] | order(order asc)`;
  
  const data = client.fetch(query);

  return data;
};

export default sanityFetch;