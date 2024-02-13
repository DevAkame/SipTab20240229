import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "./TmpSlider"


export const store = configureStore({
    reducter: {
        counter: counterReducer,
    },
});
