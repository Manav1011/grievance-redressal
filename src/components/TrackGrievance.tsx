import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Grievance } from '../store/grievancesSlice';

const TrackGrievance = () => {
  const [trackingId, setTrackingId] = useState('');
  const [grievance, setGrievance] = useState<Grievance | null>(null);
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const grievances = useSelector((state: RootState) => state.grievances.items);
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);

  const trackGrievanceContent = {
    title: {
      en: "Track Your Grievance",
      hi: "अपनी शिकायत ट्रैक करें",
      gu: "તમારી ફરિયાદ ટ્રૅક કરો",
    },
    trackingIdLabel: {
      en: "Enter Tracking ID",
      hi: "ट्रैकिंग आईडी दर्ज करें",
      gu: "ટ્રેકિંગ ID દાખલ કરો",
    },
    trackingIdPlaceholder: {
      en: "e.g., GR2024001",
      hi: "उदाहरण के लिए, GR2024001",
      gu: "દા.ત., GR2024001",
    },
    trackButton: {
      en: "Track",
      hi: "ट्रैक करें",
      gu: "ટ્રૅક કરો",
    },
    grievanceDetailsTitle: {
      en: "Grievance Details",
      hi: "शिकायत विवरण",
      gu: "ફરિયાદની વિગતો",
    },
    trackingId: {
      en: "Tracking ID:",
      hi: "ट्रैकिंग आईडी:",
      gu: "ટ્રેકિંગ ID:",
    },
    department: {
      en: "Department:",
      hi: "विभाग:",
      gu: "વિભાગ:",
    },
    description: {
      en: "Description:",
      hi: "विवरण:",
      gu: "વર્ણન:",
    },
    status: {
      en: "Status:",
      hi: "स्थिति:",
      gu: "સ્થિતિ:",
    },
    submittedOn: {
      en: "Submitted On:",
      hi: "जमा करने की तिथि:",
      gu: "સબમિટ તારીખ:",
    },
    notFoundMessage: {
      en: "Grievance not found with the provided tracking ID.",
      hi: "प्रदान की गई ट्रैकिंग आईडी के साथ शिकायत नहीं मिली।",
      gu: "આપેલ ટ્રેકિંગ ID સાથે ફરિયાદ મળી નથી.",
    },
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const foundGrievance = grievances.find(g => g.trackingId === trackingId);
    setGrievance(foundGrievance || null);
    setShowNotFoundMessage(foundGrievance === undefined);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pt-20">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">{trackGrievanceContent.title[selectedLanguage]}</h1>

        <form onSubmit={handleTrack} className="space-y-6">
          <div>
            <label htmlFor="trackingId" className="block text-xl font-medium text-gray-700 mb-2">
              {trackGrievanceContent.trackingIdLabel[selectedLanguage]}
            </label>
            <input
              type="text"
              id="trackingId"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
              placeholder={trackGrievanceContent.trackingIdPlaceholder[selectedLanguage]}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700"
          >
            {trackGrievanceContent.trackButton[selectedLanguage]}
          </button>
        </form>

        {grievance && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{trackGrievanceContent.grievanceDetailsTitle[selectedLanguage]}</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">{trackGrievanceContent.trackingId[selectedLanguage]}</span>
                <span className="text-lg">{grievance.trackingId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">{trackGrievanceContent.department[selectedLanguage]}</span>
                <span className="text-lg">{grievance.department}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">{trackGrievanceContent.description[selectedLanguage]}</span>
                <p className="text-lg">{grievance.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">{trackGrievanceContent.status[selectedLanguage]}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  grievance.status === 'pending' ? 'bg-yellow-100 text-yellow-800'
                    : grievance.status === 'in-progress' ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                  {grievance.status.charAt(0).toUpperCase() + grievance.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">{trackGrievanceContent.submittedOn[selectedLanguage]}</span>
                <span className="text-lg">{grievance.createdAt}</span>
              </div>
            </div>
          </div>
        )}

        {showNotFoundMessage && (
          <p className="mt-8 text-red-600">{trackGrievanceContent.notFoundMessage[selectedLanguage]}</p>
        )}
      </div>
    </div>
  );
};

export default TrackGrievance;
