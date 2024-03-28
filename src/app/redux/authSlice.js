const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        user: []
    },
    reducers: {
        loginUser: (state) => {
            state.isAuth = true;
        },
        logoutUser: (state) => {
            state.isAuth = false;
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { loginUser, logoutUser, setUser } = authSlice.actions
export default authSlice.reducer