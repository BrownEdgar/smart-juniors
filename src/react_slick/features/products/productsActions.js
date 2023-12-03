import axios from "axios"

export const getProductsAsync = async (url) => {
  try {
    const response = await axios(url);
    return response.data
  } catch (error) {
    return error
  }
}