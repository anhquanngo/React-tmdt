import Http from "./Http";

export const getProducts = function(config = {}) {
  return Http.get("/products", config);
};

export const getDetailProduct = function(id, config = {}) {
  return Http.get(`/products/${id}`, config);
};

export const getCommentProduct = function(id, config) {
  return Http.get(`/products/${id}/comments`, config);
};

export const createComment = function(id, data = {}, config = {}) {
  return Http.post(`/products/${id}/comments`, data, config);
};

export const getCategories = function(config = {}) {
  return Http.get("/categories", config);
};

export const getDetailCategory = function(id, config = {}) {
  return Http.get(`/categories/${id}`, config);
};

export const getProductsByCategory = function(id, config = {}) {
  return Http.get(`/categories/${id}/products`, config);
};
