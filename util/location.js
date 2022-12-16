import { API_KEY } from "./nganu-e"

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=400&height=200&center=lonlat:${lng},${lat}&zoom=14&marker=lonlat:${lng},${lat};type:material;color:%23ff3421;icontype:awesome&apiKey=${API_KEY}`

  // console.log(imagePreviewUrl)
  return imagePreviewUrl
}