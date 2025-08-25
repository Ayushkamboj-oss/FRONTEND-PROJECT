import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: 1, Name: "Ayush Kamboj", Gmail: "ayushkamboj3@gmail.com", Password: "*******" }];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const {Name, Gmail, Password}= action.payload;
      state.push({
        id: nanoid(),
        Name,
        Gmail,
        Password,
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;