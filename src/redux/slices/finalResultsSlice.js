import { createSlice } from "@reduxjs/toolkit";
import initialPayload from "../../db/payload.json"

export const finalResultsSlice = createSlice({
    name: "finalResults",
    initialState: initialPayload.finalResults,
    reducers: {
        setCAT1Result: (state, action) => {
            return { ...state, CAT1Result: action.payload };
        },
        setCAT2Result: (state, action) => {
            return { ...state, CAT2Result: action.payload };
        },
        setCAT3Result: (state, action) => {
            return { ...state, CAT3Result: action.payload };
        },
        setCAT4Result: (state, action) => {
            return { ...state, CAT4Result: action.payload };
        },
        setCAT5Result: (state, action) => {
            return { ...state, CAT5Result: action.payload };
        },
        setCAT6Result: (state, action) => {
            return { ...state, CAT6Result: action.payload };
        },
        setCAT7Result: (state, action) => {
            return { ...state, CAT7Result: action.payload };
        },
        setCAT8Result: (state, action) => {
            return { ...state, CAT8Result: action.payload };
        },
        setCAT9Result: (state, action) => {
            return { ...state, CAT9Result: action.payload };
        },
        setCAT10Result: (state, action) => {
            return { ...state, CAT10Result: action.payload };
        },
        setCAT11Result: (state, action) => {
            return { ...state, CAT11Result: action.payload };
        },
        setCAT12Result: (state, action) => {
            return { ...state, CAT12Result: action.payload };
        },
        setCAT13Result: (state, action) => {
            return { ...state, CAT13Result: action.payload };
        },
        setCAT14Result: (state, action) => {
            return { ...state, CAT14Result: action.payload };
        },
        setCAT15Result: (state, action) => {
            return { ...state, CAT15Result: action.payload };
        },
        setCAT16Result: (state, action) => {
            return { ...state, CAT16Result: action.payload };
        },
        setCAT17Result: (state, action) => {
            return { ...state, CAT17Result: action.payload };
        },
    },
});

export const {
    setCAT1Result,
    setCAT2Result,
    setCAT3Result,
    setCAT4Result,
    setCAT5Result,
    setCAT6Result,
    setCAT7Result,
    setCAT8Result,
    setCAT9Result,
    setCAT10Result,
    setCAT11Result,
    setCAT12Result,
    setCAT13Result,
    setCAT14Result,
    setCAT15Result,
    setCAT16Result,
    setCAT17Result,
} = finalResultsSlice.actions;

export default finalResultsSlice.reducer;