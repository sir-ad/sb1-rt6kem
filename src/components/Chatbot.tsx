import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const responses = {
  "experience": "I have extensive experience in product management, currently leading teams at HROne and previously at companies like Soroco and Mahindra.",
  "mentoring": "I'm passionate about mentoring and currently serve as a visiting faculty at various colleges, guest faculty at ISB Executive Education, and advisor to multiple startups.",
  "books": "I've authored two books on finance: 'Retire Today?' and 'Halcyon: Your Finance Guide', focusing on personal finance and retirement planning.",
  "skills": "My expertise includes Product Management, Go-to-market Strategy, and deep domain knowledge in FinTech, Automation, and IT Management Software.",
  "education": "I'm a CFA Level 2 holder and Financial Risk Manager (GARP), with a strong academic background including a 99.87 percentile in CAT 2019.",
  "default": "Feel free to ask me about my experience, books, mentoring programs, or professional journey!"
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    {text: "Hi! I'm Adarsh's AI assistant. Ask me anything about his work, books, or mentoring!", isUser: false}
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, {text: input, isUser: true}];
    
    let response = responses.default;
    Object.entries(responses).forEach(([key, value]) => {
      if (input.toLowerCase().includes(key)) {
        response = value;
      }
    });
    
    newMessages.push({text: response, isUser: false});
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-slate-800 p-4">
        <div className="flex items-center gap-2 text-white">
          <Bot className="w-6 h-6" />
          <h3 className="font-semibold">AI Assistant</h3>
        </div>
      </div>
      
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${
              message.isUser 
                ? 'bg-slate-800 text-white rounded-br-none' 
                : 'bg-slate-100 text-slate-800 rounded-bl-none'
            }`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}