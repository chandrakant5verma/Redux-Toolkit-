import { configureStore } from '@reduxjs/toolkit'
import  user  from './slice/UserSlice'


const store = configureStore({
    reducer: {
        users: user,
    },
})

export default store;