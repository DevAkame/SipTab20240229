import { configureStore } from '@reduxjs/toolkit';
import authSlice from './userSlice';

const authstore = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default authstore;