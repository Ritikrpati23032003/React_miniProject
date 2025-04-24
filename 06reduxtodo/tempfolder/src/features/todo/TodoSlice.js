import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 1,
        text: 'Ritik'  // for first element
    }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),               //for random id
                text: action.payload        // user take the string in the array
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
         },
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer