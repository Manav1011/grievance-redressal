import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GrievanceForm from './components/GrievanceForm';
import OfficerDashboard from './components/OfficerDashboard';
import TrackGrievance from './components/TrackGrievance';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit-grievance" element={<GrievanceForm />} />
          <Route path="/officer-dashboard" element={<OfficerDashboard />} />
          <Route path="/track-grievance" element={<TrackGrievance />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
