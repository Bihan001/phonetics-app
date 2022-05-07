import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    /**
     * Redux Toolkit allows us to write "mutating" logic in reducers.
     * But it doesn't actually mutate the state.
     * It uses the Immer library which detects changes to a "draft state" and produces a brand new immutable state based off those changes
     */
    updateDictionary: (state, action) => {
      const key = action.payload.key.trim();
      const values = action.payload.values.map((v) => v.trim());
      if (state[key]) return;
      const arr = [...values, key];
      state[key] = values;
      arr.forEach((el) => (state[el] = arr.filter((x) => x !== el)));
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDictionary } = dictionarySlice.actions;

export default dictionarySlice.reducer;
