import React from 'react'
import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Logo from '../Logo'
import ThemeSwitcher from '../ThemeSwitcher'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Theme Switcher */}
            <ThemeSwitcher />
            
            {/* Authentication Buttons */}
            <SignedOut>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <SignInButton mode="modal">
                  <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm sm:text-base px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>
                
                <SignUpButton mode="modal">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium text-sm sm:text-base px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-4">
                {/* User Button with custom styling */}
                <div className="border-l border-gray-200 dark:border-gray-700 pl-4">
                  <UserButton 
                    appearance={{
                      elements: {
                        userButtonBox: "w-10 h-10",
                        userButtonAvatarBox: "w-10 h-10",
                        userButtonTrigger: "focus:shadow-lg"
                      }
                    }}
                  />
                </div>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar