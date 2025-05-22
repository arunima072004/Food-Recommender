import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful! You can now log in.');
      navigate('/Login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">🍽️ Join the Food Recommender!</h2>
        <p className="text-gray-600 text-center mb-6">Create your account</p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-left text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/Login')}
            className="text-black-500 font-semibold "
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
