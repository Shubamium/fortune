import { createClient, Patch } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "lf3cg3zy",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

const config = {
  next: {
    revalidate: 5,
  },
};
export function fetchData<T>(grocQuery: string) {
  return client.fetch<T>(grocQuery, {}, { ...config });
}

export async function editData(id: string, data: any) {
  return client.patch(id).set(data).commit();
}
