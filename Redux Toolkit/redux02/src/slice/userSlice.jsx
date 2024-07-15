import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        deleteAllUser(state, action) {
            state.length = 0
        },
    }
})

console.log(userSlice.actions)
console.log(userSlice.reducer)

export default userSlice.reducer
export const { addUser, removeUser, deleteAllUser } = userSlice.actions


