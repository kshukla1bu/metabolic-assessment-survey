import { createSlice } from "@reduxjs/toolkit";
import initialPayload from "../../db/payload.json"

export const userSlice = createSlice({
    name: "user",
    initialState: {...initialPayload.user, activeStep:0},
    reducers: {
        setName: (state, action) => {
            return { ...state, name: action.payload };
        },
        setAge: (state, action) => {
            return { ...state, age: action.payload };
        },
        setDate: (state, action) => {
            return { ...state, date: action.payload };
        },
        setSex: (state, action) => {
            return { ...state, sex: action.payload };
        },
        setActiveStep: (state, action) => {
            return { ...state, activeStep: action.payload };
        },
    },
});

export const { setName,
    setAge,
    setDate,
    setSex,
    setActiveStep
} = userSlice.actions;

export default userSlice.reducer;