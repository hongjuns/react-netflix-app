import { configureStore, combineReducers ,getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
  
const rootReducer = combineReducers({
    auth: authSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer : persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store);
export default store;