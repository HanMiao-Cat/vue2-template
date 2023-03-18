import axios from 'axios';

export default () => {
  const instance = axios.create({
    baseURL: process.env.APP_VUE_URL,
    timeout: 6000,
  });

  instance.interceptors.request.use(
    config => {
      console.log(config);
    },
    err => {
      console.log(err);
    },
  );

  instance.interceptors.response.use(
    response => {
      console.log(response);
    },
    err => {
      console.log(err);
    },
  );
};
