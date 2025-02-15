import React, { useState } from 'react';
import { MessageSquare, X, Send, Smile } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 rounded-2xl bg-white shadow-2xl transition-all duration-500 ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-2xl bg-primary p-4 text-white">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="font-medium">Soporte en línea</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 hover:bg-white/20 transition-colors duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4">
          <div className="mb-4 flex justify-start">
            <div className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-800">
              ¡Hola! ¿En qué podemos ayudarte hoy?
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-primary transition-colors duration-300">
              <Smile className="h-6 w-6" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="text-primary hover:text-primary/80 transition-colors duration-300">
              <Send className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}