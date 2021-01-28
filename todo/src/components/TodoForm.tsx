import React, { useReducer, useState } from "react";
import TodoCard from "./TodoCard";

import todoReducer, {
  ADD_TODO,
  MARK_TODO,
  CLEAR_TODO,
  CLEAR_ALL,
  initialState,
  InitialStateTypes,
} from "../reducers/todoReducer";

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newItem, setNewItem] = useState("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: newItem });
  };

  const clearSelected = (id: number) => {
    dispatch({ type: CLEAR_TODO, payload: id });
  };

  const completeTodo = (id: number) => {
    dispatch({ type: MARK_TODO, payload: id });
  };

  return (
    <div>
      <TodoCard
        todos={state.todos}
        clearSelected={clearSelected}
        completeTodo={completeTodo}
      />
      <h2>Todo Form</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="item">Item </label>
        <input id="item" name="item" onChange={handleChanges} value={newItem} />
        <button type="submit">Add</button>
      </form>
      <button
        onClick={() => {
          dispatch({ type: CLEAR_ALL });
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default TodoForm;
