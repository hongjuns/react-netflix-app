import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : null,
    user : null
}

const authSlice = createSlice ({
    name : 'authUser',
    initialState,
    reducers : {
        setToken : (state, action ) => {
            console.log("AuthSlice action : " + action);
            let objectData = {
                id : action.payload.id,
                pw : action.payload.pw
            }
            console.log("objectData : " + objectData); 
            state.user = objectData;
            state.token = "1234"
        }
    }
})

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
