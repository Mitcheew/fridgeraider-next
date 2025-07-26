import { spoonacularApi } from './spoonacularApi';

import { findRecipes } from './recipes';

const spoonacularClient = () => {
  const client = spoonacularApi();

  return { findRecipes: findRecipes(client) };
};

export default spoonacularClient;
