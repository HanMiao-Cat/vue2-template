import request from '../request';

export const GetBanner = () => {
  return request({
    method: 'GET',
    url: '/banner',
  });
};
