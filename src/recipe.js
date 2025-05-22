import React from 'react';
import { useNavigate } from 'react-router-dom';

const allRecipes = [
  {
    name: 'Tomato Pasta',
    ingredients: ['Tomato', 'Cheese', 'Onion'],
  },
  {
    name: 'Veggie Salad',
    ingredients: ['Carrot', 'Potato', 'Onion'],
  },
  {
    name: 'Cheese Omelette',
    ingredients: ['Egg', 'Cheese', 'Milk'],
  },
  {
    name: 'Mushroom Soup',
    ingredients: ['Mushroom', 'Onion', 'Milk'],
  },
  {
    name: 'Spicy Egg Curry',
    ingredients: ['Egg', 'Onion', 'Tomato'],
  },
  {
    name: 'Grilled Sandwich',
    ingredients: ['Cheese', 'Tomato', 'Bread'],
  },
  {
    name: 'Creamy Carrot Soup',
    ingredients: ['Carrot', 'Milk', 'Onion'],
  },
  {
    name: 'Stuffed Mushrooms',
    ingredients: ['Mushroom', 'Cheese', 'Garlic'],
  },
];

function Recipe({ likes, dislikes }) {
  const navigate = useNavigate();

  const filteredRecipes = allRecipes.filter((recipe) => {
    const hasLiked = recipe.ingredients.some((i) => likes.includes(i));
    const hasDisliked = recipe.ingredients.some((i) => dislikes.includes(i));
    return hasLiked && !hasDisliked;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 px-4 overflow-x-hidden">
      <h2 className="text-3xl font-bold text-center mb-6">🍽️ Recipes You Might Like</h2>

      {filteredRecipes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.name} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
              <p className="text-gray-700">Ingredients: {recipe.ingredients.join(', ')}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">No recipes found with your preferences 😔</p>
      )}

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => navigate('/ingredients')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Back to Ingredients
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Recipe;
