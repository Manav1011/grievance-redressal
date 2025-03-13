import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Grievance {
  id: string;
  department: string;
  description: string;
  status: 'pending' | 'in-progress' | 'resolved';
  createdAt: string;
  trackingId: string;
  phoneNumber?: string;
  email?: string;
}

interface GrievancesState {
  items: Grievance[];
}

const initialState: GrievancesState = {
  items: [
    {
      id: '1',
      department: 'Health',
      description: 'Hospital facility issue in City General Hospital',
      status: 'pending',
      createdAt: '2024-03-15',
      trackingId: 'GR2024001',
    },
    {
      id: '2',
      department: 'Municipal Services',
      description: 'Garbage collection irregular in Block C',
      status: 'in-progress',
      createdAt: '2024-03-14',
      trackingId: 'GR2024002',
    },
    {
      id: '3',
      department: 'Education',
      description: 'School infrastructure needs improvement',
      status: 'resolved',
      createdAt: '2024-03-10',
      trackingId: 'GR2024003',
    },
  ],
};

const grievancesSlice = createSlice({
  name: 'grievances',
  initialState,
  reducers: {
    addGrievance: (state, action: PayloadAction<Omit<Grievance, 'id' | 'createdAt' | 'trackingId'>>) => {
      const id = (state.items.length + 1).toString();
      const trackingId = `GR2024${id.padStart(3, '0')}`;
      state.items.push({
        ...action.payload,
        id,
        createdAt: new Date().toISOString().split('T')[0],
        trackingId,
      });
    },
    updateGrievanceStatus: (state, action: PayloadAction<{ id: string; status: Grievance['status'] }>) => {
      const grievance = state.items.find(item => item.id === action.payload.id);
      if (grievance) {
        grievance.status = action.payload.status;
      }
    },
  },
});

export const { addGrievance, updateGrievanceStatus } = grievancesSlice.actions;
export default grievancesSlice.reducer;
