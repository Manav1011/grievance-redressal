import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LanguageState {
  selectedLanguage: 'en' | 'hi' | 'gu';
}

const initialState: LanguageState = {
  selectedLanguage: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'hi' | 'gu'>) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
