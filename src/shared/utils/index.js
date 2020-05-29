import apiConfig from "../../config/api";

export function getImageUrl(url) {
  const imgstr = url && url.replace("uploads/", "");
  return `${apiConfig.BASE_URL_API}/${imgstr}`;
}
