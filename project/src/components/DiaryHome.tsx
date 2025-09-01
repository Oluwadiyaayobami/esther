import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, BookOpen, LogOut } from "lucide-react";
import { formatDate } from "../utils/dateUtils";
import { clearAuthentication } from "../utils/auth";

const DiaryHome: React.FC = () => {
  const navigate = useNavigate();
  const today = formatDate(new Date());

  const openDiary = () => {
    navigate(`/diary/${today}`);
  };

  const handleLogout = () => {
    clearAuthentication();
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 relative overflow-hidden">
      {/* Floating glowing hearts + flowers background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hearts */}
        {[...Array(12)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-pink-400/40 animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: "scale(0.8)",
            }}
            fill="currentColor"
          />
        ))}

        {/* Floating flowers (like petals) */}
        {[...Array(100)].map((_, i) => (
          <div
            key={`flower-${i}`}
            className="absolute w-3 h-3 bg-pink-300 rounded-full shadow-md animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.8 + 0.2,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-lg w-full relative z-10">
        {/* Lock Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-pink-700 hover:text-pink-900 
                     transition-all duration-300 bg-white/40 px-4 py-2 rounded-full 
                     backdrop-blur-md border border-pink-300 shadow-lg hover:shadow-xl"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-['Dancing_Script'] text-sm">Lock</span>
          </button>
        </div>

        {/* Diary Cover */}
        <div
          className="relative bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl 
                     p-10 border border-pink-300/40 transform hover:scale-[1.05] hover:rotate-1
                     transition-all duration-700 cursor-pointer overflow-hidden"
          onClick={openDiary}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/30 via-transparent to-rose-400/30 blur-2xl"></div>

          <div className="relative text-center space-y-8">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-pink-700 font-['Great_Vibes'] drop-shadow-lg">
              Our Love Diary
            </h1>

            {/* Picture in a basket */}
            <div className="relative flex justify-center pt-4">
              <div className="relative">
                {/* Picture */}
                <img
                  src="/est.jpg" // replace with her picture
                  alt="My Love"
                  className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-2xl relative z-20"
                />

                {/* Basket base */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-52 h-20 
                                bg-gradient-to-t from-amber-700 to-amber-500 rounded-b-3xl 
                                border-4 border-amber-800 shadow-xl overflow-hidden">
                  {/* Basket texture */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#92400e,#92400e_10px,#f59e0b_10px,#f59e0b_20px)] opacity-50"></div>
                </div>

                {/* Flowers around picture */}
                <div className="absolute -top-6 -left-6 w-14 h-14 bg-pink-200 rounded-full border-2 border-rose-400 shadow-md animate-pulse"></div>
                <div className="absolute -top-8 right-0 w-16 h-16 bg-rose-300 rounded-full border-2 border-rose-500 shadow-md animate-bounce"></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-pink-100 rounded-full border-2 border-rose-300 shadow-md animate-ping"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="space-y-4 pt-14">
              <div className="w-28 h-1 bg-pink-400 mx-auto rounded-full shadow-md"></div>
              <BookOpen className="w-14 h-14 text-pink-600 mx-auto drop-shadow-md" />
              <div className="w-28 h-1 bg-pink-400 mx-auto rounded-full shadow-md"></div>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-pink-800 font-['Dancing_Script'] font-medium">
              A collection of our sweetest & most magical memories 💌
            </p>

            {/* Call to Action */}
            <div className="pt-6">
              <p className="text-md text-pink-700 font-['Dancing_Script'] mb-2">
                Open today’s page, my love…
              </p>
              <div className="bg-white/40 rounded-lg p-4 shadow-md border border-pink-200 backdrop-blur-sm">
                <p className="text-pink-900 font-medium">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Floating corner hearts */}
          <div className="absolute top-4 left-4 animate-bounce">
            <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
          </div>
          <div className="absolute top-4 right-4 animate-pulse">
            <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
          </div>
          <div className="absolute bottom-4 left-4 animate-pulse">
            <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
          </div>
          <div className="absolute bottom-4 right-4 animate-bounce">
            <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
          </div>
        </div>

        {/* Lock Reminder */}
        <div className="text-center mt-6">
          <p className="text-pink-600 font-['Dancing_Script'] text-md">
            Remember to lock the diary when you're done ✨
          </p>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-6">
          <p className="text-pink-800 font-['Dancing_Script'] text-xl drop-shadow-md">
            Made with endless love ❤️
          </p>
        </div>
      </div>

      {/* Custom floating animation for flowers */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
          100% { transform: translateY(0) rotate(90deg); }
        }
        .animate-float {
          animation: float infinite linear;
        }
      `}</style>
    </div>
  );
};

export default DiaryHome;
