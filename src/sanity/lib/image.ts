import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from '../lib/client'

const imageBuilder = createImageUrlBuilder(client)

// https://www.sanity.io/docs/image-url

export const urlFor = (source: SanityImageSource) => {
  return imageBuilder.image(source).auto('format').fit('max')
}




