import { createSlice } from "@reduxjs/toolkit";
import initialPayload from "../../db/payload.json"

export const surveyFemaleSlice = createSlice({
    name: "surveyFemaleSlice",
    initialState: initialPayload.surveyFemale,
    reducers: {
        setCat16: (state, action) => {
            return { ...state, CAT16: action.payload };
        },
        setCat17: (state, action) => {
            return { ...state, CAT17: action.payload };
        },
    },
});

export const {
    setCat16,
    setCat17
} = surveyFemaleSlice.actions;

export default surveyFemaleSlice.reducer;