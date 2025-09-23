import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Change this line
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

// Add request interceptor for debugging
apiClient.interceptors.request.use((config) => {
  console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
  return config;
});

// Add response interceptor for debugging
apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('❌ API Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export const getDiscussions = async () => {
  try {
    console.log('Fetching discussions...');
    const response = await apiClient.get('/discussions', {
      params: {
        'sort': '-lastPostedAt',
        'include': 'user',
      },
    });
    console.log('Discussions response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching discussions:', error);
    throw error;
  }
};

export const getBanners = async () => {
  try {
    console.log('Fetching banners...');
    const response = await apiClient.get('/banners');
    console.log('Banners response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching banners:', error);
    throw error;
  }
};

export const getNews = async () => {
  try {
    console.log('Fetching news...');
    const response = await apiClient.get('/news');
    console.log('News response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
