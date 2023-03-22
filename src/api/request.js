import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 6000,
});

instance.interceptors.request.use(
  config => {
    console.log(config);
    return config;
  },
  err => {
    console.log(err);
  },
);

instance.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      return response.data;
    }
  },
  err => {
    console.log(err);
  },
);

export default instance;
