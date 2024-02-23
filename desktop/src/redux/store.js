import { configureStore } from '@reduxjs/toolkit';
import authSlice from './userSlice';

export const authstore = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
