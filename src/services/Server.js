import axios from "axios";
import ApiConfig from "../config/api";

export const getProducts = function (config = {}) {
  return axios.get(ApiConfig.BASE_URL_API + "/get-products", config);
};

export const getDetailProduct = function (id, config = {}) {
  return axios.get(ApiConfig.BASE_URL_API + `/product/${id}`, config);
};
