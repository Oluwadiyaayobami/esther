import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiaryHome from './components/DiaryHome';
import DiaryPage from './components/DiaryPage';
import FloatingHearts from './components/FloatingHearts';
import PasswordGate from './components/PasswordGate';
import { checkAuthentication } from './utils/auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticated = checkAuthentication();
    setIsAuthenticated(authenticated);
    setIsLoading(false);
  }, []);

  const handlePasswordCorrect = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50 relative overflow-hidden">
        {/* Floating hearts background */}
        <FloatingHearts />

        <div className="text-center space-y-4 z-10">
          {/* Animated heart loader */}
          <div className="w-16 h-16 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-75"></div>
            <div className="absolute inset-2 rounded-full bg-pink-400"></div>
          </div>

          <p className="text-pink-600 font-['Dancing_Script'] text-2xl animate-bounce">
            Loading our diary...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <FloatingHearts />
        <PasswordGate onPasswordCorrect={handlePasswordCorrect} />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        <FloatingHearts />
        <Routes>
          <Route path="/" element={<DiaryHome />} />
          <Route path="/diary/:date?" element={<DiaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
