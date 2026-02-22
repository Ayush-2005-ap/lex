import React from 'react';

export default function ChatButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
            aria-label="Open chat"
        >
            {/* Simple chat bubble icon using SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h8M8 14h4m-2 6a9 9 0 100-18 9 9 0 000 18z"
                />
            </svg>
        </button>
    );
}
