import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useReactMediaRecorder } from 'react-media-recorder';
import { Mic, MicOff, Send } from 'lucide-react';
import { addGrievance } from '../store/grievancesSlice';
import { RootState } from '../store/store';

const GrievanceForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);
  const [department, setDepartment] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [district, setDistrict] = useState('');

  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
  });

  const departments = [
    'Health',
    'Education',
    'Municipal Services',
    'Transportation',
    'Police',
    'Electricity',
    'Water Supply',
    'Others'
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

  const formContent = {
    title: {
      en: "Submit Your Grievance",
      hi: "अपनी शिकायत दर्ज करें",
      gu: "તમારી ફરિયાદ સબમિટ કરો",
    },
    departmentLabel: {
      en: "Select Department",
      hi: "विभाग का चयन करें",
      gu: "વિભાગ પસંદ કરો",
    },
    departmentPlaceholder: {
      en: "Choose a department",
      hi: "एक विभाग चुनें",
      gu: "એક વિભાગ પસંદ કરો",
    },
    districtLabel: {
      en: "Select District",
      hi: "ज़िला चुनें",
      gu: "જિલ્લો પસંદ કરો",
    },
    districtPlaceholder: {
      en: "Choose a district",
      hi: "एक जिला चुनें",
      gu: "એક જિલ્લો પસંદ કરો",
    },
    descriptionLabel: {
      en: "Describe Your Grievance",
      hi: "अपनी शिकायत का वर्णन करें",
      gu: "તમારી ફરિયાદનું વર્ણન કરો",
    },
    descriptionPlaceholder: {
      en: "Please describe your issue in detail...",
      hi: "कृपया अपनी समस्या का विस्तार से वर्णन करें...",
      gu: "કૃપા કરીને તમારી સમસ્યાનું વિગતવાર વર્ણન કરો...",
    },
    phoneNumberLabel: {
      en: "Phone Number (Required)",
      hi: "फ़ोन नंबर (आवश्यक)",
      gu: "ફોન નંબર (આવશ્યક)",
    },
    phoneNumberPlaceholder: {
      en: "Enter your phone number",
      hi: "अपना फ़ोन नंबर दर्ज करें",
      gu: "તમારો ફોન નંબર દાખલ કરો",
    },
    emailLabel: {
      en: "Email (Optional)",
      hi: "ईमेल (वैकल्पिक)",
      gu: "ઇમેઇલ (વૈકલ્પિક)",
    },
    emailPlaceholder: {
      en: "Enter your email (optional)",
      hi: "अपना ईमेल दर्ज करें (वैकल्पिक)",
      gu: "તમારું ઇમેઇલ દાખલ કરો (વૈકલ્પિક)",
    },
    recordVoiceTitle: {
      en: "Or Record Your Voice",
      hi: "या अपनी आवाज़ रिकॉर्ड करें",
      gu: "અથવા તમારો અવાજ રેકોર્ડ કરો",
    },
    startRecording: {
      en: "Start Recording",
      hi: "रिकॉर्डिंग शुरू करें",
      gu: "રેકોર્ડિંગ શરૂ કરો",
    },
    stopRecording: {
      en: "Stop Recording",
      hi: "रिकॉर्डिंग बंद करें",
      gu: "રેકોર્ડિંગ બંધ કરો",
    },
    recordingInProgress: {
      en: "Recording in progress...",
      hi: "रिकॉर्डिंग चल रही है...",
      gu: "રેકોર્ડિંગ ચાલુ છે...",
    },
    submitButton: {
      en: "Submit Grievance",
      hi: "शिकायत जमा करें",
      gu: "ફરિયાદ સબમિટ કરો",
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }

    dispatch(addGrievance({
      department,
      description,
      status: 'pending',
      phoneNumber,
      email,
      district,
    }));
    // Navigate to tracking page after submission
    navigate('/track-grievance');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pt-20">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">{formContent.title[selectedLanguage]}</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="department" className="block text-xl font-medium text-gray-700 mb-2">
              {formContent.departmentLabel[selectedLanguage]}
            </label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">{formContent.departmentPlaceholder[selectedLanguage]}</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="district" className="block text-xl font-medium text-gray-700 mb-2">
              {formContent.districtLabel[selectedLanguage]}
            </label>
            <select
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">{formContent.districtPlaceholder[selectedLanguage]}</option>
              {Object.keys(districts).map((districtKey) => (
                <option key={districtKey} value={districtKey}>
                  {districts[districtKey][selectedLanguage]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-xl font-medium text-gray-700 mb-2">
              {formContent.descriptionLabel[selectedLanguage]}
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
              placeholder={formContent.descriptionPlaceholder[selectedLanguage]}
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-xl font-medium text-gray-700 mb-2">
              {formContent.phoneNumberLabel[selectedLanguage]}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
              placeholder={formContent.phoneNumberPlaceholder[selectedLanguage]}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-700 mb-2">
              {formContent.emailLabel[selectedLanguage]}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
              placeholder={formContent.emailPlaceholder[selectedLanguage]}
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">{formContent.recordVoiceTitle[selectedLanguage]}</h2>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => {
                  if (isRecording) {
                    stopRecording();
                  } else {
                    startRecording();
                  }
                  setIsRecording(!isRecording);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isRecording ? 'bg-red-600' : 'bg-blue-600'
                } text-white hover:opacity-90`}
              >
                {isRecording ? (
                  <>
                    <MicOff className="h-5 w-5" />
                    <span>{formContent.stopRecording[selectedLanguage]}</span>
                  </>
                ) : (
                  <>
                    <Mic className="h-5 w-5" />
                    <span>{formContent.startRecording[selectedLanguage]}</span>
                  </>
                )}
              </button>
              {status === 'recording' && (
                <span className="text-red-600">{formContent.recordingInProgress[selectedLanguage]}</span>
              )}
              {mediaBlobUrl && (
                <audio src={mediaBlobUrl} controls className="w-full" />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700"
          >
            <Send className="h-5 w-5" />
            <span>{formContent.submitButton[selectedLanguage]}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GrievanceForm;
