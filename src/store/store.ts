import { configureStore } from "@reduxjs/toolkit";
import UserReduser from "../UserReduser";
export const store = configureStore({
    reducer:{
        users: UserReduser,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;