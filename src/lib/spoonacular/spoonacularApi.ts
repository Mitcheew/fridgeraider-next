import axios from 'axios';

const spoonacularApi = () => {
  const instance = axios.create({
    baseURL: `https://api.spoonacular.com/`,
    params: {
      apiKey: process.env.SPOONACULAR_API_KEY,
    },
  });
  return instance;
};

export { spoonacularApi };
