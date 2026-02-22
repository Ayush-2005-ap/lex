import React, { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import TypingLoader from './TypingLoader';

export default function ChatBotContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]); // { role: 'user'|'assistant', content: string }
    const [loading, setLoading] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async (msg) => {
        if (!msg) return;
        const userMsg = { role: 'user', content: msg };
        setMessages((prev) => [...prev, userMsg]);
        setLoading(true);
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: msg }),
            });
            const data = await res.json();
            const reply = data.reply || 'No response';
            setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
        } catch (e) {
            console.error('Chat API error:', e);
            setMessages((prev) => [...prev, { role: 'assistant', content: 'Error contacting server.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ChatButton onClick={toggleChat} />
            {isOpen && (
                <ChatWindow
                    messages={messages}
                    onSend={sendMessage}
                    onClose={toggleChat}
                    loading={loading}
                />
            )}
        </>
    );
}
