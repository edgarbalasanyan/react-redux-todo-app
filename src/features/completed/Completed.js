import React from "react";
import { useSelector } from "react-redux";
import "./completed.css";
import { useNavigate } from "react-router-dom";

const Completed = () => {
  console.log("completed rendered");
  let completedTodos = useSelector((state) => state.completed);
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>All Todos</button>
      {completedTodos.length ? (
      <div className="completed">
        {completedTodos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </div>
      ) : ( "" )}
    </>
  );
};

export default Completed;
