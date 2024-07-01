import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));
const storedToken = localStorage.getItem("token");

const initialState ={
    user: storedUser ? storedUser : null,
    token: storedToken ? storedToken : null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) =>{
            state.token = action.payload;
        },
        clearAuth: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { setUser, setToken, clearAuth } = userSlice.actions;
export default userSlice.reducer;
