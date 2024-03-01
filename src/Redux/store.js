import { configureStore } from '@reduxjs/toolkit';
import flashCardSlice from './flashcardReducers';

export const store = configureStore({
  reducer: {
    flashcards: flashCardSlice,
  },
});
