import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Phone, Users } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Chatbot from './Chatbot';

const Home = () => {
  const navigate = useNavigate();
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);

  const handleTrackNowClick = () => {
    navigate('/track-grievance');
  };

  const quotes = {
    en: [
      "Raise your voice against injustice, fight for justice.",
      "Your silence will not protect you.",
      "Every person's complaint helps improve society.",
      "Speak up, even if your voice shakes.",
      "Be the change you wish to see.",
    ],
    hi: [
      "अन्याय के खिलाफ आवाज उठाओ, न्याय के लिए लड़ो।",
      "आपकी चुप्पी आपको सुरक्षित नहीं रखेगी।",
      "हर व्यक्ति की शिकायत समाज को बेहतर बनाने में मदद करती है।",
      "बोलिए, भले ही आपकी आवाज कांपे।",
      "वह बदलाव बनें जो आप देखना चाहते हैं।",
    ],
    gu: [
      "અન્યાય સામે અવાજ ઉઠાવો, ન્યાય માટે લડો.",
      "તમારી શાંતિ તમને સુરક્ષિત નહીં કરે.",
      "દરેક વ્યક્તિની ફરિયાદ સમાજને સુધારવામાં મદદ કરે છે.",
      "અવાજ ઉઠાવો, ભલે તમારો અવાજ ધ્રૂજે.",
      "જે તમે જોવા માંગો છો તે બદલાવ બનો.",
    ],
  };

  const messages = {
    en: [
      "Don't let injustice prevail. Report your grievances and be a part of the change.",
      "Your voice matters. Every complaint filed helps improve our society.",
      "Silence empowers wrongdoing. Speak up and contribute to a better future.",
      "Be the change you wish to see. Report grievances and hold authorities accountable.",
      "Your vigilance is crucial. Report any issues to ensure a fair and just society.",
    ],
    hi: [
      "अन्याय को हावी न होने दें। अपनी शिकायतें दर्ज करें और बदलाव का हिस्सा बनें।",
      "आपकी आवाज मायने रखती है। हर शिकायत हमारे समाज को बेहतर बनाने में मदद करती है।",
      "चुप रहने से गलत काम करने वालों को शक्ति मिलती है। बोलिए और बेहतर भविष्य में योगदान दीजिए।",
      "वह बदलाव बनें जो आप देखना चाहते हैं। शिकायतें दर्ज करें और अधिकारियों को जवाबदेह ठहराएं।",
      "आपकी सतर्कता महत्वपूर्ण है। एक निष्पक्ष और न्यायपूर्ण समाज सुनिश्चित करने के लिए किसी भी मुद्दे की रिपोर्ट करें।",
    ],
    gu: [
      "અન્યાયને ચાલવા ન દો. તમારી ફરિયાદો નોંધાવો અને પરિવર્તનનો ભાગ બનો.",
      "તમારો અવાજ મહત્વપૂર્ણ છે. દરેક ફરિયાદ આપણા સમાજને સુધારવામાં મદદ કરે છે.",
      "ચૂપ રહેવાથી ખોટું કામ કરનારને શક્તિ મળે છે. બોલો અને સારા ભવિષ્યમાં યોગદાન આપો.",
      "તમે જે પરિવર્તન જોવા માંગો છો તે બનો. ફરિયાદો નોંધાવો અને અધિકારીઓને જવાબદાર ઠેરવો.",
      "તમારી સતર્કતા મહત્વપૂર્ણ છે. ન્યાયી સમાજ સુનિશ્ચિત કરવા માટે કોઈપણ સમસ્યાની જાણ કરો.",
    ],
  };

  const howItWorks = {
    en: {
      title: "How It Works",
      steps: [
        { number: "1", title: "Submit", description: "File your grievance through writing or voice recording" },
        { number: "2", title: "Process", description: "Our officers review and process your complaint" },
        { number: "3", title: "Resolve", description: "Get updates and resolution for your grievance" },
      ],
    },
    hi: {
      title: "यह कैसे काम करता है",
      steps: [
        { number: "1", title: "जमा करें", description: "लेखन या ध्वनि रिकॉर्डिंग के माध्यम से अपनी शिकायत दर्ज करें" },
        { number: "2", title: "प्रक्रिया", description: "हमारे अधिकारी आपकी शिकायत की समीक्षा और प्रक्रिया करते हैं" },
        { number: "3", title: "समाधान", description: "अपनी शिकायत के लिए अपडेट और समाधान प्राप्त करें" },
      ],
    },
    gu: {
      title: "તે કેવી રીતે કામ કરે છે",
      steps: [
        { number: "1", title: "સબમિટ કરો", description: "લેખન અથવા વૉઇસ રેકોર્ડિંગ દ્વારા તમારી ફરિયાદ દાખલ કરો" },
        { number: "2", title: "પ્રક્રિયા", description: "અમારા અધિકારીઓ તમારી ફરિયાદની સમીક્ષા અને પ્રક્રિયા કરે છે" },
        { number: "3", title: "નિરાકરણ", description: "તમારી ફરિયાદ માટે અપડેટ્સ અને નિરાકરણ મેળવો" },
      ],
    },
  };

  const footerContent = {
    en: {
      copyright: `&copy; ${new Date().getFullYear()} Gujarat Government. All rights reserved.`,
      message: `"Grievance redressal is the foundation of good governance. Your complaints help us listen and improve."`,
      explanation: `Gujarat Government encourages grievance reporting because it:
        - Ensures a fair and transparent administration.
        - Increases the trust of citizens.
        - Improves the quality of public services.
        - Reduces corruption.`,
    },
    hi: {
      copyright: `&copy; ${new Date().getFullYear()} गुजरात सरकार। सर्वाधिकार सुरक्षित।`,
      message: `"शिकायत निवारण सुशासन की नींव है। आपकी शिकायतें हमें सुनने और सुधार करने में मदद करती हैं।"`,
      explanation: `गुजरात सरकार शिकायत रिपोर्टिंग को प्रोत्साहित करती है क्योंकि यह:
        - एक निष्पक्ष और पारदर्शी प्रशासन सुनिश्चित करता है।
        - नागरिकों का विश्वास बढ़ाता है।
        - सार्वजनिक सेवाओं की गुणवत्ता में सुधार करता है।
        - भ्रष्टाचार कम करता है।`,
    },
    gu: {
      copyright: `&copy; ${new Date().getFullYear()} ગુજરાત સરકાર. બધા હકો અમારી પાસે છે.`,
      message: `"ફરિયાદ નિવારણ એ સુશાસનનો પાયો છે. તમારી ફરિયાદો અમને સાંભળવામાં અને સુધારવામાં મદદ કરે છે."`,
      explanation: `ગુજરાત સરકાર ફરિયાદ નિવારણને પ્રોત્સાહન આપે છે કારણ કે તે:
        - ન્યાયી અને પારદર્શક વહીવટ સુનિશ્ચિત કરે છે.
        - નાગરિકોનો વિશ્વાસ વધારે છે.
        - જાહેર સેવાઓની ગુણવત્તામાં સુધારો કરે છે.
        - ભ્રષ્ટાચાર ઘટાડે છે.`,
    },
  };

  const homePageContent = {
    submitGrievance: {
      en: "Submit Grievance",
      hi: "शिकायत दर्ज करें",
      gu: "ફરિયાદ સબમિટ કરો",
    },
    support: {
      en: "24/7 Support",
      hi: "24/7 समर्थन",
      gu: "24/7 સપોર્ટ",
    },
    trackStatus: {
      en: "Track Status",
      hi: "स्थिति ट्रैक करें",
      gu: "સ્થિતિ ટ્રૅક કરો",
    },
    chatNow: {
      en: "Chat Now",
      hi: "अभी चैट करें",
      gu: "હવે ચેટ કરો",
    },
    title: {
      en: "Grievance Redressal Portal",
      hi: "शिकायत निवारण पोर्टल",
      gu: "ફરિયાદ નિવારણ પોર્ટલ",
    },
  };

  const getRandomQuote = () => quotes[selectedLanguage][Math.floor(Math.random() * quotes[selectedLanguage].length)];
  const getRandomMessage = () => messages[selectedLanguage][Math.floor(Math.random() * messages[selectedLanguage].length)];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">{homePageContent.title[selectedLanguage]}</h1>
        <p className="text-xl text-gray-600">{getRandomMessage()}</p>
        <blockquote className="mt-4 italic text-gray-700">{getRandomQuote()}</blockquote>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FileText className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">{homePageContent.submitGrievance[selectedLanguage]}</h2>
          <p className="text-gray-600 mb-4">
            {selectedLanguage === 'en' ? 'File your complaint in writing or record your voice' :
              selectedLanguage === 'hi' ? 'लेखन या अपनी आवाज रिकॉर्ड करके अपनी शिकायत दर्ज करें' :
                'લેખન અથવા તમારા અવાજને રેકોર્ડ કરીને તમારી ફરિયાદ દાખલ કરો'}
          </p>
          <Link
            to="/submit-grievance"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700"
          >
            {homePageContent.submitGrievance[selectedLanguage]}
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Phone className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">{homePageContent.support[selectedLanguage]}</h2>
          <p className="text-gray-600 mb-4">
            {selectedLanguage === 'en' ? 'Get help anytime through our chatbot assistance' :
              selectedLanguage === 'hi' ? 'हमारे चैटबॉट सहायता के माध्यम से कभी भी मदद लें' :
                'અમારા ચેટબોટ સહાય દ્વારા ગમે ત્યારે મદદ મેળવો'}
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700"
          >
            {homePageContent.chatNow[selectedLanguage]}
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">{homePageContent.trackStatus[selectedLanguage]}</h2>
          <p className="text-gray-600 mb-4">
            {selectedLanguage === 'en' ? 'Check the status of your submitted grievance' :
              selectedLanguage === 'hi' ? 'अपनी सबमिट की गई शिकायत की स्थिति जांचें' :
                'તમારી સબમિટ કરેલી ફરિયાદની સ્થિતિ તપાસો'}
          </p>
          <button
            onClick={handleTrackNowClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700"
          >
            {homePageContent.trackStatus[selectedLanguage]}
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">{howItWorks[selectedLanguage].title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks[selectedLanguage].steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-700">
            {footerContent[selectedLanguage].copyright}
            <br />
            {footerContent[selectedLanguage].message}
            <br />
            {footerContent[selectedLanguage].explanation}
          </p>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
};

export default Home;
