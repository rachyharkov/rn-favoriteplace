import { API_KEY } from "./nganu-e"

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=400&height=200&center=lonlat:${lng},${lat}&zoom=14&marker=lonlat:${lng},${lat};type:material;color:%23ff3421;icontype:awesome&apiKey=${API_KEY}`

  // console.log(imagePreviewUrl)
  return imagePreviewUrl
}

export async function getLocationAddress(lat, lng) {
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${API_KEY}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Something went wrong! Failed to fetch address")
  }

  const data = await response.json()

  // see docs https://docs.geoapify.com/api/geocoding/geocode-reverse/
  const address = data.features[0].properties.formatted
  return address
}