import React, { useState } from 'react';
import TypingLoader from './TypingLoader';

export default function ChatWindow({ messages, onSend, onClose, loading }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input.trim());
            setInput('');
        }
    };

    return (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-h-[70vh] bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col overflow-hidden backdrop-blur-md border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <h2 className="text-lg font-semibold">Lex Chatbot</h2>
                <button onClick={onClose} className="text-white hover:opacity-80 transition-opacity">
                    ✕
                </button>
            </div>

            {/* Message list */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs rounded-lg p-2 text-sm ${msg.role === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <TypingLoader />
                    </div>
                )}
            </div>

            {/* Input area */}
            <form onSubmit={handleSubmit} className="flex border-t border-gray-200 dark:border-gray-700 p-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 rounded-md border border-gray-300 dark:border-gray-600 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                />
                <button
                    type="submit"
                    className="ml-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
