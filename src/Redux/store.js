import { configureStore } from '@reduxjs/toolkit';
import flashCardslice from './flashCardslice';

export const store = configureStore({
  reducer: {
    flashcards: flashCardslice,
  },
});
