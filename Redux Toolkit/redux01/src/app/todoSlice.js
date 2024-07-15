import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            const todos = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todos)
            console.log(state)
        },
        removeTodo(state, action) {
            state.todos.splice(action.payload, 1)
        }
    }
})

export default todoSlice.reducer
export const { addTodo, removeTodo } = todoSlice.actions