import { createStore, combineReducers, applyMiddleware } from "redux";
import { todosReducer } from "../features/todos/todosSlice";
import { completedReducer } from "../features/completed/completedSlice";
import thunk from "redux-thunk";


// reducer
const reducer = combineReducers({
  todos: todosReducer,
  completed: completedReducer,
});

export const store = createStore(reducer,applyMiddleware(thunk));
