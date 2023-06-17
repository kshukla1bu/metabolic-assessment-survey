import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import surveyCommonReducer from "./slices/surveyCommonSlice";
import surveyMaleReducer from "./slices/surveyMaleSlice";
import surveyFemaleReducer from "./slices/surveyFemaleSlice";
import finalResultsReducer from "./slices/finalResultsSlice";


const rootReducer = combineReducers({
    user: userReducer,
    surveyCommon: surveyCommonReducer,
    surveyMale: surveyMaleReducer,
    surveyFemale: surveyFemaleReducer,
    finalResults: finalResultsReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;
