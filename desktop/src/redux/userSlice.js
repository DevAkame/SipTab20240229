import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('hello/getHello',async () => {
    return await fetch('https://yf3f8gsib9.execute-api.ap-northeast-1.amazonaws.com/default/userauth-staging').then((res) => res.json()
    );
});

const userSlice = createSlice({
    name: 'hello',
    initialState:{
        hello: [],
        loading: false,
        error: false,

    },

    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state,action) => {
            state.loading = false;
            state.hello = action.payload;
        },
        [getUsers.rejected]: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export default userSlice.reducer;


