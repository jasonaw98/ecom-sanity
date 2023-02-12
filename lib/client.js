import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'zygv8sc0',
  dataset: 'production',
  apiVersion: '2023-02-07',
  useCdn: true,
  token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);