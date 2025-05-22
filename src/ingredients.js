import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ingredientList = [
  'Tomato', 'Cheese', 'Onion', 'Carrot', 'Potato', 'Egg', 'Milk',
  'Mushroom', 'Bread', 'Garlic', 'Corn', 'Capsicum', 'Spinach', 'Butter',
];

function Ingredients({ onSubmit }) {
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleToggle = (ingredient, type) => {
    if (type === 'like') {
      setLikes((prev) =>
        prev.includes(ingredient) ? prev.filter((i) => i !== ingredient) : [...prev, ingredient]
      );
      setDislikes((prev) => prev.filter((i) => i !== ingredient));
    } else {
      setDislikes((prev) =>
        prev.includes(ingredient) ? prev.filter((i) => i !== ingredient) : [...prev, ingredient]
      );
      setLikes((prev) => prev.filter((i) => i !== ingredient));
    }
  };

  const handleSubmit = () => {
    onSubmit({ likes, dislikes });
    setMessage("Great! We'll now show you recipes..");
    setTimeout(() => navigate('/recipes'), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 px-4">
      <h2 className="text-3xl font-bold text-center mb-5">Choose Your Ingredients</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {ingredientList.map((ingredient) => (
          <div
            key={ingredient}
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">{ingredient}</h3>
            <div className="flex justify-center gap-2">
              <button
                className={`px-3 py-1 rounded-md text-black ${
                  likes.includes(ingredient) ? 'bg-green-500' : 'bg-gray-300'
                }`}
                onClick={() => handleToggle(ingredient, 'like')}
              >
                Like
              </button>
              <button
                className={`px-3 py-1 rounded-md text-black ${
                  dislikes.includes(ingredient) ? 'bg-red-500' : 'bg-gray-300'
                }`}
                onClick={() => handleToggle(ingredient, 'dislike')}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>

      {message && <p className="text-center text-green-600 mt-4">{message}</p>}

      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit Choices
        </button>
      </div>
    </div>
  );
}

export default Ingredients;
