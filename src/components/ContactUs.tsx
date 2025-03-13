import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ContactUs = () => {
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);

  const contactUsContent = {
    title: {
      en: 'Contact Us',
      hi: 'हमसे संपर्क करें',
      gu: 'અમારો સંપર્ક કરો',
    },
    phoneNumber: {
      en: 'Phone Number: +91-123-456-7890',
      hi: 'फ़ोन नंबर: +91-123-456-7890',
      gu: 'ફોન નંબર: +91-123-456-7890',
    },
    departmentLabel: {
      en: 'Select Department',
      hi: 'विभाग का चयन करें',
      gu: 'વિભાગ પસંદ કરો',
    },
    departmentPlaceholder: {
      en: 'Choose a department',
      hi: 'एक विभाग चुनें',
      gu: 'એક વિભાગ પસંદ કરો',
    },
    districtLabel: {
      en: 'Select District',
      hi: 'ज़िला चुनें',
      gu: 'જિલ્લો પસંદ કરો',
    },
    districtPlaceholder: {
      en: 'Choose a district',
      hi: 'एक जिला चुनें',
      gu: 'એક જિલ્લો પસંદ કરો',
    },
    messageLabel: {
      en: 'Your Message',
      hi: 'आपका संदेश',
      gu: 'તમારો સંદેશ',
    },
    messagePlaceholder: {
      en: 'Enter your message...',
      hi: 'अपना संदेश दर्ज करें...',
      gu: 'તમારો સંદેશ દાખલ કરો...',
    },
    submitButton: {
      en: 'Submit',
      hi: 'जमा करें',
      gu: 'સબમિટ કરો',
    },
  };

  const departments = [
    'Health',
    'Education',
    'Municipal Services',
    'Transportation',
    'Police',
    'Electricity',
    'Water Supply',
    'Others',
  ];

  const districts = {
    Ahmedabad: {
      en: 'Ahmedabad',
      hi: 'अहमदाबाद',
      gu: 'અમદાવાદ',
    },
    Surat: {
      en: 'Surat',
      hi: 'सूरत',
      gu: 'સુરત',
    },
    Gandhinagar: {
      en: 'Gandhinagar',
      hi: 'गांधीनगर',
      gu: 'ગાંધીનગર',
    },
    Bhavnagar: {
      en: 'Bhavnagar',
      hi: 'भावनगर',
      gu: 'ભાવનગર',
    },
    Kutch: {
      en: 'Kutch',
      hi: 'कच्छ',
      gu: 'કચ્છ',
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pt-20">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">{contactUsContent.title[selectedLanguage]}</h1>

        <p className="text-lg mb-4">{contactUsContent.phoneNumber[selectedLanguage]}</p>

        <form className="space-y-6">
          <div>
            <label htmlFor="department" className="block text-xl font-medium text-gray-700 mb-2">
              {contactUsContent.departmentLabel[selectedLanguage]}
            </label>
            <select
              id="department"
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{contactUsContent.departmentPlaceholder[selectedLanguage]}</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="district" className="block text-xl font-medium text-gray-700 mb-2">
              {contactUsContent.districtLabel[selectedLanguage]}
            </label>
            <select
              id="district"
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{contactUsContent.districtPlaceholder[selectedLanguage]}</option>
              {Object.keys(districts).map((districtKey) => (
                <option key={districtKey} value={districtKey}>
                  {districts[districtKey][selectedLanguage]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-xl font-medium text-gray-700 mb-2">
              {contactUsContent.messageLabel[selectedLanguage]}
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
              placeholder={contactUsContent.messagePlaceholder[selectedLanguage]}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700"
          >
            {contactUsContent.submitButton[selectedLanguage]}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
