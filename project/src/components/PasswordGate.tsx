import React, { useState } from 'react';
import { Heart, Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordGateProps {
  onPasswordCorrect: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // You can change this password to whatever you'd like
  const correctPassword = 'mylove';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === correctPassword) {
      // Store authentication in localStorage
      localStorage.setItem('diaryAuthenticated', 'true');
      localStorage.setItem('diaryAuthTime', Date.now().toString());
      onPasswordCorrect();
    } else {
      setIsShaking(true);
      setAttempts(prev => prev + 1);
      setPassword('');
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Password Protection Card */}
        <div className={`bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 
                        rounded-xl shadow-2xl p-8 border-4 border-pink-200
                        transform transition-all duration-300 ${
                          isShaking ? 'animate-bounce' : 'hover:scale-105'
                        }`}>
          
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <div className="flex justify-center">
              <div className="relative">
                <Lock className="w-12 h-12 text-pink-600" />
                <Heart 
                  className="w-6 h-6 text-red-500 absolute -top-1 -right-1 animate-pulse" 
                  fill="currentColor" 
                />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-pink-700 font-['Great_Vibes']">
              Private Diary
            </h1>
            
            <p className="text-pink-600 font-['Dancing_Script'] text-lg">
              Enter the secret word to unlock our love diary
            </p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 pr-12 border-2 border-pink-300 rounded-lg
                         font-['Dancing_Script'] text-lg text-center
                         focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200
                         bg-white/80 placeholder-pink-400 transition-all duration-200"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2
                         text-pink-500 hover:text-pink-700 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={!password.trim()}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 
                       hover:from-pink-600 hover:to-red-600
                       disabled:from-pink-300 disabled:to-red-300
                       text-white font-['Dancing_Script'] text-xl font-semibold
                       py-3 px-6 rounded-lg transition-all duration-300
                       hover:shadow-lg hover:scale-105 disabled:cursor-not-allowed
                       disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              Unlock Our Diary ❤️
            </button>
          </form>

          {/* Error Message */}
          {attempts > 0 && (
            <div className="mt-4 text-center">
              <p className="text-red-500 font-['Dancing_Script'] text-lg animate-fadeIn">
                {attempts === 1 ? 
                  "Hmm, that's not quite right. Try again! 💕" :
                  attempts === 2 ?
                  "Still not right, but I believe in you! 💖" :
                  "Keep trying, love will find a way! 💝"
                }
              </p>
            </div>
          )}

          {/* Hint */}
          <div className="mt-6 text-center">
            <p className="text-pink-500 font-['Dancing_Script'] text-sm">
              Hint: It's what you call me ✨
            </p>
          </div>

          {/* Decorative Hearts */}
          <div className="absolute top-4 left-4">
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" fill="currentColor" />
          </div>
          <div className="absolute top-4 right-4">
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" fill="currentColor" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" fill="currentColor" />
          </div>
          <div className="absolute bottom-4 right-4">
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" fill="currentColor" />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-pink-600 font-['Dancing_Script'] text-lg">
            Made with endless love ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;