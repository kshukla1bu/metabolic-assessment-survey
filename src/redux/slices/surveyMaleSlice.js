import { createSlice } from "@reduxjs/toolkit";

export const surveyMaleSlice = createSlice({
    name: "surveyMaleSlice",
    initialState: {},
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