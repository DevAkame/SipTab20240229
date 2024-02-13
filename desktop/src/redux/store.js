import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "./counter"

export const store = configureStore({
    reducter: {
        counter: counterReducer,
    },
});
