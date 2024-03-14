import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    currentUser:null,
    loading:false,
    error:false,
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        LoginStart:(state)=>{
            state.loading = true;
        },
        LoginToSuccess:(state,action) =>{
            state.currentUser = action.payload
            state.loading= false;
            state.error=false;
        },
        LoginFailure : (state,action) =>{
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {LoginStart,LoginToSuccess,LoginFailure}= userSlice.actions;

export default userSlice.reducer;