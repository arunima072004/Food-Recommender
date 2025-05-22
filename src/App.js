import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Signup from './signup';
import Login from './Login';
import Ingredients from './ingredients';
import Recipe from './recipe';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userIngredients, setUserIngredients] = useState(null);
  const [message, setMessage] = useState(''); 

  const handleLogin = (userData) => {
    setUserLoggedIn(true);
    setMessage('Say goodbye to picky eating — we’ll help you discover meals you’ll love, tailored just for your taste!');
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Welcome to the Food Recommender!</h1>
          
          {message && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-center">
              {message}
            </div>
          )}
          
          <Routes>
            <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />

            <Route
              path="/ingredients"
              element={
                userLoggedIn ? (
                  <Ingredients
                    onSubmit={(data) => {
                      setUserIngredients(data);
                    }}
                  />
                ) : (
                  <Navigate to="/Login" />
                )
              }
            />

            <Route
              path="/recipes"
              element={
                userLoggedIn && userIngredients ? (
                  <Recipe likes={userIngredients.likes} dislikes={userIngredients.dislikes} />
                ) : (
                  <Navigate to="/ingredients" />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
