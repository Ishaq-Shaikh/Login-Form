import React from 'react';

const ThanksForLogin = ({ userName = 'User' }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center">
        
        <div className="mb-4 text-6xl">
          ✅
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Thanks for logging in!
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Welcome back, <span className="font-semibold text-indigo-600">{userName}</span>.
        </p>

      </div>
    </div>
  );
};

export default ThanksForLogin;