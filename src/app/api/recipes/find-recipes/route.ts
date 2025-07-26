import { NextResponse, NextRequest } from 'next/server';

import spoonacularClient from '@/lib/spoonacular';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ingredients: string[] }> }
) {
  try {
    const client = spoonacularClient();
    console.log('Hello');
    const ingredients = ['apples', 'flour', 'sugar'];

    const recipes = await client.findRecipes({
      number: 10,
      ranking: 1,
      ignorePantry: true,
      ingredients: ingredients.join(','),
    });
    return NextResponse.json(
      {
        recipes,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: {
          message: 'Failed to fetch recipes',
        },
      },
      { status: 500 }
    );
  }
}
