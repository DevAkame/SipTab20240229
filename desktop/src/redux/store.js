import { configureStore } from '@reduxjs/toolkit';
import authReducer from './userSlice';

const authstore = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default authstore;