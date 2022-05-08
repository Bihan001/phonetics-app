import { createSlice } from '@reduxjs/toolkit';
import { TEXT_CONTENT } from 'utils/constants';

/**
 * - Initial state of the translate slice
 * - @property {string} content - The text written by the user
 * - @property {array} currentContentOptions - The current translation suggessions available to the user for the selected text
 * - @property {number} selectionStartIndex - The start index of the selected text
 * - @property {number} selectionEndIndex - The end index of the selected text
 * - @property {object} language - Current language label and value
 */
const initialState = {
  content: localStorage.getItem(TEXT_CONTENT) || '',
  currentContentOptions: [],
  selectionStartIndex: -1,
  selectionEndIndex: -1,
  language: { label: 'English', value: 'en-t-i0-und' },
};

/**
 * - We are creating a redux slice here called translate. It stores the above data globally.
 */
export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  // The following methods are just the setters of the above data
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setCurrentContentOptions: (state, action) => {
      state.currentContentOptions = action.payload || initialState.currentContentOptions;
    },
    setStartAndEndIndex: (state, action) => {
      state.selectionStartIndex = action.payload[0] || initialState.selectionStartIndex;
      state.selectionEndIndex = action.payload[1] || initialState.selectionEndIndex;
    },
    setLanguage: (state, action) => {
      state.language = action.payload || initialState.language;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContent, setCurrentContentOptions, setStartAndEndIndex, setLanguage } = translateSlice.actions;

export default translateSlice.reducer;
