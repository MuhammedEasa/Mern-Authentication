import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.map((user) => ({
        id: user._id,
        name: user.username,
        email: user.email,
      }));
    },
    addUser: (state, action) => {
      state.users.push({
        name: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      });
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        };
      }
    },
    deleteUser:(state,action)=>{
        const id = action.payload.id
        state.users = state.users.filter(user=> user.id!==id )
    }
  },
});

export const { getUser, addUser, updateUser,deleteUser } = adminSlice.actions;
export default adminSlice.reducer;
