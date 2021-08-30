import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/cardsSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});
