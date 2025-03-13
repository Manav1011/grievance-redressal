import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);

  const chatbotContent = {
    greeting: {
      en: "Hello! How can I help you today?",
      hi: "नमस्ते! आज मैं आपकी कैसे मदद कर सकता हूँ?",
      gu: "નમસ્તે! આજે હું તમને કેવી રીતે મદદ કરી શકું?",
    },
    botResponse: {
      en: "Thank you for your message. An officer will review your query shortly.",
      hi: "आपके संदेश के लिए धन्यवाद। एक अधिकारी जल्द ही आपके प्रश्न की समीक्षा करेंगे।",
      gu: "તમારા સંદેશ માટે આભાર. એક અધિકારી ટૂંક સમયમાં તમારી ક્વેરીની સમીક્ષા કરશે.",
    },
    inputPlaceholder: {
      en: "Type your message...",
      hi: "अपना संदेश टाइप करें...",
      gu: "તમારો સંદેશ લખો...",
    },
    sendButton: {
      en: "Send",
      hi: "भेजो",
      gu: "મોકલો",
    },
    headerTitle: {
      en: "Help Assistant",
      hi: "सहायता सहायक",
      gu: "મદદ સહાયક",
    },
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: chatbotContent.botResponse[selectedLanguage],
        isBot: true
      }]);
    }, 1000);
    setInput('');
  };

  // Update the initial message to use the selected language
  React.useEffect(() => {
    setMessages([{ text: chatbotContent.greeting[selectedLanguage], isBot: true }]);
  }, [selectedLanguage, chatbotContent.greeting]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">{chatbotContent.headerTitle[selectedLanguage]}</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={chatbotContent.inputPlaceholder[selectedLanguage]}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {chatbotContent.sendButton[selectedLanguage]}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
