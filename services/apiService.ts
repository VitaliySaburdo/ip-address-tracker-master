import axios from 'axios';
const KEY = 'at_qNQvGhANGXiPwXzjvhhRcfHplGhAA'
const BASE_URL = 'https://geo.ipify.org/api/v2/country';

export const apiService = async ({ipAddress}) => {
  try {
    const params = {
        apiKey: KEY,
        ipAddress: ipAddress,
    }
    const response = await axios.get(BASE_URL, { params });
    return response.data
  } catch (error) {
    console.log(error);
  }
}