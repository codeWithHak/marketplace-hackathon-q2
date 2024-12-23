import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const client = createClient({
  projectId: projectId || '',
  dataset: dataset || '',
  apiVersion: '2023-05-03',
  useCdn: false, // We'll set this to true in production
})

export const sanityConfig = {
  projectId,
  dataset,
}

