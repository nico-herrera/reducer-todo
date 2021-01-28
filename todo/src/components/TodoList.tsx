import React from "react";
import todoReducer, {
  ADD_TODO,
  MARK_TODO,
  CLEAR_TODO,
  initialState,
  InitialStateTypes,
} from "../reducers/todoReducer";

import TodoForm from "./TodoForm";

const TodoList = () => {
  return (
    <div>
      <h1>Your Todo List!</h1>
      <TodoForm />
    </div>
  );
};

export default TodoList;
