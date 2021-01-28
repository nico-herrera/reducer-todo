export const ADD_TODO = "ADD_TODO";
export const MARK_TODO = "MARK_TODO";
export const CLEAR_TODO = "CLEAR_TODO";
export const CLEAR_ALL = "CLEAR_ALL";

export interface InitialStateTypes {
  todos: { item: string; completed: boolean; id: number }[];
}

export const initialState: InitialStateTypes = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: Date.now(),
    },
  ],
};

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "MARK_TODO"; payload: number }
  | { type: "CLEAR_TODO"; payload: number }
  | { type: "CLEAR_ALL" };

const todoReducer = (
  state: InitialStateTypes,
  action: Action
): InitialStateTypes => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() },
        ],
      };
    case MARK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    case CLEAR_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
        }),
      };
    case CLEAR_ALL:
      return {
        ...state,
        todos: [],
      };
  }
};

export default todoReducer;
