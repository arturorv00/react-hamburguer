import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://react-my-burguer-67b61.firebaseio.com/'
});

export default axiosInstance;