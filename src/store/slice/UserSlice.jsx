import{ createSlice} from '@reduxjs/toolkit'

const user = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            console.log(action.payload)
            // data is first gat throughaddNew User then dispaching on AddUser se yha store me data add kr diya.
        },
        removeUser(state,action){
            // let userIndex = state.indexOf(action.payload)
            // state.splice(userIndex,1)
            state.splice(action.payload,1)
        },
        deleteUser(state,action){
            return []; // intializing value ko [ ] data de rahe hai.
        }
    
    },
    extraReducers(builder){
        builder.addCase(user.actions.deleteUser,()=>{
            return []; // ye wala point sidha ek deletUser pr le jayega otherwise one by one check karta
        })
    },
    extraReducers(builder){
        builder.addCase(user.actions.addUser,(state)=>{
            state.push(action.payload)
        })
    }
})
// All action creator are combined on reducers 

export  default user.reducer;

export const {addUser} = user.actions;
export const {removeUser,deleteUser} = user.actions;

// this export to get the adduser in user Details for addNewUser function we made actions and dispatch 