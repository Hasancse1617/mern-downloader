import axios from "axios";



const defaultOptions = {
    baseURL: process.env.REACT_APP_API_PATH,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Create instance
  const axiosInstance = axios.create(defaultOptions);


  export default axiosInstance;