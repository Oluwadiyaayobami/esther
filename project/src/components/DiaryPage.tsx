import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home, Heart, Edit3, Save, X, LogOut } from 'lucide-react';
import { formatDate, parseDate, addDays, subtractDays } from '../utils/dateUtils';
import { getLoveNote } from '../utils/loveNotes';
import { getUserMessage, saveUserMessage } from '../utils/userMessages';
import { clearAuthentication } from '../utils/auth';

const DiaryPage: React.FC = () => {
  const { date } = useParams<{ date: string }>();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [tempMessage, setTempMessage] = useState('');
  
  const currentDate = date ? parseDate(date) : new Date();
  const formattedDate = formatDate(currentDate);
  const loveNote = getLoveNote(currentDate);

  useEffect(() => {
    const savedMessage = getUserMessage(formattedDate);
    setUserMessage(savedMessage);
    setTempMessage(savedMessage);
  }, [formattedDate]);

  const goToPrevious = () => {
    const prevDate = subtractDays(currentDate, 1);
    navigate(`/diary/${formatDate(prevDate)}`);
  };

  const goToNext = () => {
    const nextDate = addDays(currentDate, 1);
    navigate(`/diary/${formatDate(nextDate)}`);
  };

  const goHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    clearAuthentication();
    window.location.reload();
  };

  const startEditing = () => {
    setIsEditing(true);
    setTempMessage(userMessage);
  };

  const saveMessage = () => {
    saveUserMessage(formattedDate, tempMessage);
    setUserMessage(tempMessage);
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setTempMessage(userMessage);
    setIsEditing(false);
  };

  const isToday = formatDate(new Date()) === formattedDate;
  const isFuture = currentDate > new Date();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Diary Page */}
        <div className="bg-gradient-to-br from-pink-50 via-white to-red-50 
                        rounded-xl shadow-xl border-4 border-pink-200 
                        transform hover:shadow-2xl transition-all duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-200 to-red-200 
                          rounded-t-lg p-6 border-b-2 border-pink-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={goHome}
                  className="flex items-center space-x-2 text-pink-700 hover:text-pink-900 
                             transition-colors duration-200 group"
                >
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-['Dancing_Script'] text-lg">Home</span>
                </button>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-pink-800 font-['Great_Vibes']">
                  Our Love Diary
                </h2>
                <div className="flex justify-center mt-1">
                  <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {!isFuture && (
                  <button
                    onClick={isEditing ? cancelEditing : startEditing}
                    className="flex items-center space-x-2 text-pink-700 hover:text-pink-900 
                               transition-colors duration-200 group"
                  >
                    {isEditing ? (
                      <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    ) : (
                      <Edit3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    )}
                    <span className="font-['Dancing_Script'] text-lg">
                      {isEditing ? 'Cancel' : 'Write'}
                    </span>
                  </button>
                )}
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-pink-700 hover:text-pink-900 
                             transition-colors duration-200 group"
                >
                  <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-['Dancing_Script'] text-lg">Lock</span>
                </button>
              </div>
            </div>
          </div>

          {/* Date Header */}
          <div className="bg-white/80 p-4 border-b border-pink-200">
            <h3 className="text-xl md:text-2xl text-center text-pink-800 font-['Dancing_Script'] font-semibold">
              {currentDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
              {isToday && (
                <span className="ml-2 text-sm bg-pink-200 text-pink-800 px-2 py-1 rounded-full">
                  Today
                </span>
              )}
            </h3>
          </div>

          {/* Love Note Content */}
          <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 text-pink-600">
                  <Heart className="w-6 h-6" fill="currentColor" />
                  <span className="font-['Dancing_Script'] text-xl">Dear Love</span>
                  <Heart className="w-6 h-6" fill="currentColor" />
                </div>
              </div>

              {isFuture ? (
                <div className="text-center space-y-4">
                  <p className="text-gray-500 font-['Dancing_Script'] text-xl italic">
                    This page is waiting for its special day...
                  </p>
                  <div className="flex justify-center">
                    <Heart className="w-8 h-8 text-pink-300 animate-pulse" />
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed 
                               font-['Dancing_Script'] text-center italic">
                    {loveNote}
                  </p>
                  
                  <div className="text-center pt-6">
                    <p className="text-pink-600 font-['Dancing_Script'] text-lg">
                      Forever yours,
                    </p>
                    <p className="text-pink-800 font-['Great_Vibes'] text-2xl mt-2">
                      Your Love ❤️
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* User Message Section */}
          {!isFuture && (
            <div className="px-8 md:px-12 pb-8">
              <div className="bg-white/70 rounded-lg p-6 border-l-4 border-red-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                    <span className="text-red-700 font-['Dancing_Script'] text-lg font-semibold">
                      My Thoughts
                    </span>
                  </div>
                  {!isEditing && userMessage && (
                    <button
                      onClick={startEditing}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <textarea
                      value={tempMessage}
                      onChange={(e) => setTempMessage(e.target.value)}
                      placeholder="Write your thoughts for today..."
                      className="w-full h-32 p-4 border-2 border-pink-200 rounded-lg 
                               font-['Dancing_Script'] text-lg resize-none
                               focus:border-pink-400 focus:outline-none
                               bg-white/90 placeholder-pink-400"
                    />
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={cancelEditing}
                        className="flex items-center space-x-2 px-4 py-2 
                                 text-gray-600 hover:text-gray-800 
                                 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                        <span className="font-['Dancing_Script']">Cancel</span>
                      </button>
                      <button
                        onClick={saveMessage}
                        className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 
                                 text-white px-4 py-2 rounded-full transition-all duration-200 
                                 hover:shadow-lg"
                      >
                        <Save className="w-4 h-4" />
                        <span className="font-['Dancing_Script']">Save</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {userMessage ? (
                      <p className="text-lg text-gray-800 leading-relaxed 
                                  font-['Dancing_Script'] italic whitespace-pre-wrap">
                        {userMessage}
                      </p>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-pink-500 font-['Dancing_Script'] text-lg mb-4">
                          No thoughts written yet for this day
                        </p>
                        <button
                          onClick={startEditing}
                          className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 
                                   text-white px-6 py-3 rounded-full transition-all duration-200 
                                   hover:shadow-lg mx-auto"
                        >
                          <Edit3 className="w-5 h-5" />
                          <span className="font-['Dancing_Script'] text-lg">Write Something</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="bg-gradient-to-r from-pink-100 to-red-100 
                          rounded-b-lg p-6 border-t border-pink-200">
            <div className="flex justify-between items-center">
              <button
                onClick={goToPrevious}
                className="flex items-center space-x-2 bg-pink-200 hover:bg-pink-300 
                           text-pink-800 px-4 py-2 rounded-full transition-all duration-200 
                           group hover:shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-['Dancing_Script'] font-medium">Previous</span>
              </button>

              <div className="text-center">
                <p className="text-sm text-pink-700 font-['Dancing_Script']">
                  Page {Math.floor((currentDate.getTime() - new Date('2024-01-01').getTime()) / (1000 * 60 * 60 * 24)) + 1}
                </p>
              </div>

              <button
                onClick={goToNext}
                className="flex items-center space-x-2 bg-pink-200 hover:bg-pink-300 
                           text-pink-800 px-4 py-2 rounded-full transition-all duration-200 
                           group hover:shadow-lg"
              >
                <span className="font-['Dancing_Script'] font-medium">Next</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;