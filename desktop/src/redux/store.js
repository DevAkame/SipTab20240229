import { configureStore } from "@reduxjs/toolkit";
import counterReducter from './TmpSlider';


export const store = configureStore({
    reducter: {
        counter: counterReducter,
    },
});
