import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
  currentContentOptions: [],
  selectionStartIndex: -1,
  selectionEndIndex: -1,
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
  },
});

// Action creators are generated for each case reducer function
export const { setContent, setCurrentContentOptions, setStartAndEndIndex } = translateSlice.actions;

export default translateSlice.reducer;
