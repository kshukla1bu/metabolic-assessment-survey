import { createSlice } from "@reduxjs/toolkit";

export const surveyFemaleSlice = createSlice({
    name: "surveyFemaleSlice",
    initialState: {},
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