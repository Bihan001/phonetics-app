import { createSlice } from '@reduxjs/toolkit';
import { TEXT_CONTENT } from 'utils/constants';

const initialState = {
  content: localStorage.getItem(TEXT_CONTENT) || '',
  currentContentOptions: [],
  selectionStartIndex: -1,
  selectionEndIndex: -1,
  language: { label: 'English', value: 'en-t-i0-und' },
};

export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    /**
     * Redux Toolkit allows us to write "mutating" logic in reducers.
     * But it doesn't actually mutate the state.
     * It uses the Immer library which detects changes to a "draft state" and produces a brand new immutable state based off those changes
     */
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setCurrentContentOptions: (state, action) => {
      state.currentContentOptions = action.payload || [];
    },
    setStartAndEndIndex: (state, action) => {
      state.selectionStartIndex = action.payload[0];
      state.selectionEndIndex = action.payload[1];
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContent, setCurrentContentOptions, setStartAndEndIndex, setLanguage } = translateSlice.actions;

export default translateSlice.reducer;
