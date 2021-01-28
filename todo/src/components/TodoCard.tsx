import React from "react";

import "./TodoCard.css";

type TodoTypes = {
  item: string;
  completed: boolean;
  id: number;
};

const TodoCard: React.FC<{
  todos: TodoTypes[];
  clearSelected: (id: number) => void;
  completeTodo: (id: number) => void;
}> = ({ todos, clearSelected, completeTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2
              className={`${todo.completed ? "completed" : null}`}
              onClick={() => completeTodo(todo.id)}
            >
              {todo.item}
            </h2>
            <button onClick={() => clearSelected(todo.id)}>Clear</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoCard;
