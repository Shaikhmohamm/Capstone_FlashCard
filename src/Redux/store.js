import { configureStore } from '@reduxjs/toolkit';
import flashCardslice from './flashcardReducers';

export const store = configureStore({
  reducer: {
    flashcards: flashCardslice,
  },
});
