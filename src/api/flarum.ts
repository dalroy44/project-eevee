import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://nothing.community/api',
});

export const getDiscussions = async () => {
  const response = await apiClient.get('/discussions', {
    params: {
      'sort': '-lastPostedAt',
      'include': 'user',
    },
  });
  return response.data;
};

export const getBanners = async () => {
  const response = await apiClient.get('/banners');
  return response.data;
};

export const getNews = async () => {
  const response = await apiClient.get('/news');
  return response.data;
};
