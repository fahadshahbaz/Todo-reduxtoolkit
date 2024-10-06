import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Learn Redux Toolkit"
    }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // It always provide state and action
        addTodo: (state, action) => {
           const todo = {
            // Nanoid is used to generate unique id
            id: nanoid(),
            // We will get text from payload it is by default an object
            text: action.payload,
           }
           state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            todo.text = action.payload.text;
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;