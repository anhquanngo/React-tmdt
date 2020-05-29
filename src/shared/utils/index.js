import apiConfig from "../../config/api";

export function getImageUrl(url) {
  return `${apiConfig.BASE_URL}/assets/uploads/${url}`;
}
