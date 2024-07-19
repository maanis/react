import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    statusForm: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeStatus(state) {
            state.statusForm = !state.statusForm
        },

        addData(state, action) {
            const { name, number, email, url } = action.payload
            const user = {
                id: nanoid(),
                name: name,
                number: number,
                email: email,
                url: url
            }
            state.user.push(user)
        }
    }
})
export const { changeStatus, addData } = userSlice.actions
export default userSlice.reducer