import React, { useState } from 'react';
import { ClipboardList, Search, Filter } from 'lucide-react';
import { Grievance } from '../store/grievancesSlice'; // Import Grievance type
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { updateGrievanceStatus } from '../store/grievancesSlice';

const OfficerDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for testing
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [selectedGrievance, setSelectedGrievance] = useState<Grievance | null>(null);
  const grievances = useSelector((state: RootState) => state.grievances.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    setIsLoggedIn(true);
  };

  const handleGrievanceClick = (grievance: Grievance) => {
    setSelectedGrievance(grievance);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedGrievance) return;
    const newStatus = event.target.value as Grievance['status'];
    setSelectedGrievance({ ...selectedGrievance, status: newStatus }); // Update the local state immediately
  };

  const handleUpdateStatus = () => {
    if (!selectedGrievance) return;
    dispatch(updateGrievanceStatus({ id: selectedGrievance.id, status: selectedGrievance.status }));
    setSelectedGrievance(null); // Navigate back to the list view
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md glassmorphism">
          <div className="flex flex-col items-center mb-6">
            {/* Illustration Placeholder - Replace with your illustration */}
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-4xl text-blue-600">👤</span>
            </div>
            <h2 className="text-2xl font-bold text-blue-800 text-center">Officer Login</h2>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-50"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
      {selectedGrievance ? (
        // Detailed View
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Grievance Details</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-gray-100">
              <span className="text-lg font-medium text-gray-700">Tracking ID:</span>
              <span className="text-lg">{selectedGrievance.trackingId}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-gray-100">
              <span className="text-lg font-medium text-gray-700">Department:</span>
              <span className="text-lg">{selectedGrievance.department}</span>
            </div>
            <div className="p-4 rounded-lg shadow-sm bg-gray-100">
              <p className="text-lg font-medium text-gray-700">Description:</p>
              <p className="text-lg">{selectedGrievance.description}</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-gray-100">
              <span className="text-lg font-medium text-gray-700">Status:</span>
              <select
                value={selectedGrievance?.status || 'pending'}
                onChange={handleStatusChange}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 border border-gray-300"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-gray-100">
              <span className="text-lg font-medium text-gray-700">Submitted On:</span>
              <span className="text-lg">{selectedGrievance.createdAt}</span>
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Summarize
            </button>
            <button
              onClick={() => setSelectedGrievance(null)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Back to List
            </button>
            <button
              onClick={handleUpdateStatus}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        // Grievance List View
        <div className="bg-white rounded-lg shadow-md p-8 pt-20">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800">Grievance Dashboard</h1>
            <div className="flex space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search grievances..."
                  className="pl-10 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <Filter className="h-5 w-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-500">ID</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-500">Department</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-500">Description</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-500">Status</th>
                  <th className="px-6 py-3 text-left text-lg font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {grievances.map((grievance) => (
                  <tr
                    key={grievance.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleGrievanceClick(grievance)}
                  >
                    <td className="px-6 py-4 text-lg">{grievance.trackingId}</td>
                    <td className="px-6 py-4 text-lg">{grievance.department}</td>
                    <td className="px-6 py-4 text-lg">{grievance.description}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        grievance.status === 'pending' ? 'bg-yellow-100 text-yellow-800'
                          : grievance.status === 'in-progress' ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                        {grievance.status.charAt(0).toUpperCase() + grievance.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800" onClick={() => handleGrievanceClick(grievance)}>
                        <ClipboardList className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficerDashboard;
