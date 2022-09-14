import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogined :false,
    user : null
}

const authSlice = createSlice ({
    name : 'authUser',
    initialState,
    reducers : {
        setToken : (state, action ) => {
            let objectData = {
                id : action.payload.id,
                pw : action.payload.pw
            }
            state.user = objectData;
            state.isLogined = true
        }
    }
})

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
