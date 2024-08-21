import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
       todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ text: action.payload });
        },
    }
})

export const { addTodo } = todoSlice.actions;
export const selectTodos = state => state.todo.todos;
export const selectTodoCount = state => state.todo.todos.length;
export default todoSlice.reducer;