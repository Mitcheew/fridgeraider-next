import type { AxiosInstance } from 'axios';

type FindRecipesRequest = {
  /** The maximum number of recipes to return (between 1 and 100). Defaults to 10. */
  number: number;
  /** Whether to maximize used ingredients (1) or minimize missing ingredients (2) first. */
  ranking: 1 | 2;
  /** Whether to ignore typical pantry items, such as water, salt, flour, etc. */
  ignorePantry: boolean;
  /** A comma-separated list of ingredients that the recipes should contain. ie: "apples,flour,sugar" */
  ingredients: string;
};

type Ingredients = {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: string[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}[];

type FindRecipeResult = {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: Ingredients;
  title: string;
  unusedIngredients: Ingredients;
  usedIngredientCount: number;
  usedIngredients: Ingredients;
};

const findRecipes =
  (spoonacularApi: AxiosInstance) =>
  async ({
    number = 10,
    ranking,
    ignorePantry = true,
    ingredients,
  }: FindRecipesRequest) => {
    const url = `/recipes/findByIngredients`;
    const { data }: { data: FindRecipeResult } = await spoonacularApi.get(url, {
      params: {
        number,
        ranking,
        ignorePantry,
        ingredients,
      },
    });

    return data;
  };

export default findRecipes;
