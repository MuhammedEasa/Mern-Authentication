import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        getUser: (state, action) => {
            state.users = action.payload.map(user => ({
                id: user._id,
                name: user.username,
                email: user.email
            }));
        },
        addUser: (state, action) => {
            state.users.push({
                name: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            });
        }
    }
});
 

export const {getUser,addUser} = adminSlice.actions
export default adminSlice.reducer