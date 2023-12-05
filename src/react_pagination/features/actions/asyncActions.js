import axios from "axios"

export const getAsyncData = async ({ url, config }) => {
  try {
    const response = await axios.get(url, config);
    return response.data
  } catch (error) {
    return error
  }
}