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
