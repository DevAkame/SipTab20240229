import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const urlHello = 'https://yf3f8gsib9.execute-api.ap-northeast-1.amazonaws.com/default/userauth-staging'

export const getSession = createAsyncThunk('user/getSession',async () => {
    return await fetch(urlHello).then((res) => res.json());
    
});

const userSlice = createSlice({
    name:'user',
    initialState:{
        session:[],
    },
    extraReducers:{
        [getSession.fulfilled]:(state,action) => {
            state.session = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;



