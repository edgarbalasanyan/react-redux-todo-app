import "./App.css";
import Todos from "./features/todos/Todos";
import Completed from "./features/completed/Completed";
import InputField from "./features/inputField/InputField";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { fetchTodos } from "./features/todos/actions";
import { fetchTodos } from "./features/todos/todosSlice";
import { store } from "./app/store";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    store.dispatch(fetchTodos());
  }, []);
  console.log(store.getState());
  return (
    <div className="App">
      <h1>React Redux todo list app</h1>
      <header className="App-header">
        <InputField />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todos />}></Route>
            <Route path="/completed" element={<Completed />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
