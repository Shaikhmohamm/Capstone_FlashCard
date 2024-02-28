import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flashcards: [],
};

export const flashcardsSlice = createSlice({
  name: 'flashcards',
  initialState,
  reducers: {
    addFlashcard: (state, action) => {
      state.flashcards.push(action.payload);
    },
    getLocalFlashcarData: () => {
			const data = JSON.parse(localStorage.getItem("flashcards"));
			if (data) {
				return [...data];
			}
		},
    removeFlashcard: (state, action) => {
      state.flashcards = state.flashcards.filter(flashcard => flashcard.id !== action.payload);
    },
  },
});

export const { addFlashcard, removeFlashcard, getLocalFlashcarData } = flashcardsSlice.actions;

export default flashcardsSlice.reducer;
