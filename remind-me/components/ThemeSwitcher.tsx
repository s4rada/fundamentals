"use client";
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-32 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        )
    }

    const themes = [
        { value: 'light', label: 'Light', icon: Sun },
        { value: 'dark', label: 'Dark', icon: Moon },
        { value: 'system', label: 'System', icon: Monitor },
    ]

    const currentTheme = themes.find(t => t.value === theme)

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-sm"
            >
                {currentTheme && (
                    <>
                        <currentTheme.icon size={18} />
                        <span className="text-sm font-medium">{currentTheme.label}</span>
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </>
                )}
            </button>

            {isOpen && (
                <div className="absolute top-12 right-0 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                    {themes.map((themeOption) => (
                        <button
                            key={themeOption.value}
                            onClick={() => {
                                setTheme(themeOption.value)
                                setIsOpen(false)
                            }}
                            className={`flex items-center space-x-3 w-full px-4 py-3 text-left transition-colors duration-200 ${
                                theme === themeOption.value
                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                            } ${themeOption.value === 'light' ? 'rounded-t-lg' : ''} ${
                                themeOption.value === 'system' ? 'rounded-b-lg' : ''
                            }`}
                        >
                            <themeOption.icon size={16} />
                            <span className="text-sm font-medium">{themeOption.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ThemeSwitcher