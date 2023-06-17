import { createSlice } from "@reduxjs/toolkit";
import initialPayload from "../../db/payload.json"

export const userSlice = createSlice({
    name: "user",
    initialState: initialPayload.user,
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
    },
});

export const { setUserName, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;