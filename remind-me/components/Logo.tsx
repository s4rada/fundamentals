import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">

      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg">

          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.8954 2 10 2.89543 10 4V4.29188C7.0444 5.12064 5 7.83041 5 11V11.8284L3.70711 13.1213C3.31658 13.5118 3.31658 14.145 3.70711 14.5355C4.09763 14.926 4.7308 14.926 5.12132 14.5355L6.41421 13.2426C6.77283 12.884 7 12.412 7 11.9142V11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11V11.9142C17 12.412 17.2272 12.884 17.5858 13.2426L18.8787 14.5355C19.2692 14.926 19.9024 14.926 20.2929 14.5355C20.6834 14.145 20.6834 13.5118 20.2929 13.1213L19 11.8284V11C19 7.83041 16.9556 5.12064 14 4.29188V4C14 2.89543 13.1046 2 12 2Z"/>
            <path d="M12 22C10.3431 22 9 20.6569 9 19H15C15 20.6569 13.6569 22 12 22Z"/>
          </svg>
          

          <div className="absolute -top-1 -right-1">
            <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
          </div>
        </div>
      </div>
      

      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          RemindMe
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Smart Reminders</p>
      </div>
    </div>
  );
};

export default Logo;