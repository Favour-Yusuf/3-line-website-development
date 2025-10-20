import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "../env"

// This client only reads public content (no token needed)
export const publicClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // use CDN for reliability + speed
})
