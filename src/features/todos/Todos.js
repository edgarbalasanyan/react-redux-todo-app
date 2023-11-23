import React from "react";
import "./todos.css";
import { useSelector, useDispatch } from "react-redux";
import { complete, undo } from "../completed/actions";
import { deleteTodo } from "./actions";
import { useNavigate } from "react-router-dom";
import { store } from "../../app/store";

const Todos = () => {
  console.log("todos rendered");
  console.log(store.getState());
  let todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/completed")}>Completed Todos</button>
      <div className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                id={todo.id}
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                  if (document.getElementById(todo.id).checked) {
                    dispatch(complete(todo.id, todo.title));
                  } else {
                    dispatch(undo(todo.id));
                  }
                }}
              ></input>
              {todo.title}
              <button
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
