import { toast } from 'react-toastify';

import axios from 'axios';
const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

const BASE_URL = 'https://geo.ipify.org/api/v2/country,city,vpn';

interface ApiParams {
  ipAddress: string;
}

export const apiService = async ({ ipAddress }: ApiParams) => {
  try {
    const params = {
      apiKey: apiKey,
      ipAddress: ipAddress,
    };
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
  toast.warn("We can’t find anything. Please enter the correct IP address.");
    throw error; 
  }
};