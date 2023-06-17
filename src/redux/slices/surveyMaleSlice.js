import { createSlice } from "@reduxjs/toolkit";
import initialPayload from "../../db/payload.json"

export const surveyMaleSlice = createSlice({
    name: "surveyMaleSlice",
    initialState: initialPayload.surveyMale,
    reducers: {
        setCat14: (state, action) => {
            return { ...state, CAT14: action.payload };
        },
        setCat15: (state, action) => {
            return { ...state, CAT15: action.payload };
        },
    },
});

export const {
        setCat14,
        setCat15
    } = surveyMaleSlice.actions;

export default surveyMaleSlice.reducer;