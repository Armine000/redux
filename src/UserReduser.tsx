import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
 const userSlice = createSlice({
    name:'users',
    initialState:userList,
    reducers:{
       addUser:(state:any,action)=>{
          state.push(action.payload)
       },
       updateUser:(state:any, action)=>{
           const {id,name,email} = action.payload;
           const uu = state.find((user:any)=> user.id == id);
           console.log(uu)
           if(uu){
            uu.name = name;
            uu.email = email;
           }
       },
       deleteUser:(state:any, action)=>{
        const {id} = action.payload;
        const uu = state.find((user:any)=> user.id == id)
        console.log(uu);
        if(uu){
            return state.filter((f:any)=> f.id != id );
        }
       }
    }

})


export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer; 