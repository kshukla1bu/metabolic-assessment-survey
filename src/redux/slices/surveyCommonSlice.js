import { createSlice } from "@reduxjs/toolkit";
import initialPayload from "../../db/payload.json"

export const surveyCommonSlice = createSlice({
    name: "surveyCommon",
    initialState: initialPayload.surveyCommon,
    reducers: {
        setCAT1: (state, action) => {
            return { ...state, CAT1: action.payload };
        },
        setCAT2: (state, action) => {
            return { ...state, CAT2: action.payload };
        },
        setCAT3: (state, action) => {
            return { ...state, CAT3: action.payload };
        },
        setCAT4: (state, action) => {
            return { ...state, CAT4: action.payload };
        },
        setCAT5: (state, action) => {
            return { ...state, CAT5: action.payload };
        },
        setCAT6: (state, action) => {
            return { ...state, CAT6: action.payload };
        },
        setCAT7: (state, action) => {
            return { ...state, CAT7: action.payload };
        },
        setCAT8: (state, action) => {
            return { ...state, CAT8: action.payload };
        },
        setCAT9: (state, action) => {
            return { ...state, CAT9: action.payload };
        },
        setCAT10: (state, action) => {
            return { ...state, CAT10: action.payload };
        },
        setCAT11: (state, action) => {
            return { ...state, CAT11: action.payload };
        },
        setCAT12: (state, action) => {
            return { ...state, CAT12: action.payload };
        },
        setCAT13: (state, action) => {
            return { ...state, CAT13: action.payload };
        },
    },
});

export const {
    setCAT1,
    setCAT2,
    setCAT3,
    setCAT4,
    setCAT5,
    setCAT6,
    setCAT7,
    setCAT8,
    setCAT9,
    setCAT10,
    setCAT11,
    setCAT12,
    setCAT13,
} = surveyCommonSlice.actions;

export default surveyCommonSlice.reducer;