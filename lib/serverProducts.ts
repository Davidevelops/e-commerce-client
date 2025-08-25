import axios from "axios";

const API_URL = "https://e-commerce-server-rnas.onrender.com";

export async function getAllProducts() {
  const res = await axios.get(`${API_URL}/get-all-products`);
  return res.data.Products;
}

export async function getSingleProduct(productID: string) {
  const res = await axios.get(`${API_URL}/get-product/${productID}`);
  return res.data.product;
}
