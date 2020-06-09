import apiConfig from "../../config/api";

export function getImageUrl(url) {
  return `${apiConfig.BASE_URL}/assets/uploads/${url}`;
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
