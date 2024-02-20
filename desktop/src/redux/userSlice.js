import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, clearError } = authSlice.actions;

export default authSlice.reducer;

// ログイン処理
export const login = (username, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    // Cognitoのログイン処理
    // 成功したらdispatch(setUser(user))
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// ログアウト処理
export const logout = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    // Cognitoのログアウト処理
    // 成功したらdispatch(setUser(null))
  } catch (error) {
    dispatch(setError(error.message));
  }
};
