import React, { useState, useEffect, useReducer } from "react";

import TodoList from "./TodoList";
import axios from "axios";

const API = "/todos.json";

axios.defaults.baseURL = "/todos.json";
axios.defaults.headers.common["Authorization"] = "JWT_TOKEN_HERE";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const json = await response.json();
      console.log("json0", json);

      setTodos(json);
    }

    fetchData();
  }, []);

  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = async e => {
    if (todoTitle !== "" && e.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ]);

      axios.post("/todos.json", todos).then(res => {
        console.log(res);
        console.log(res.data);
      });

      setTodoTitle("");
    }
  };

  return (
    // <Context.Provider
    //   value={{
    //     dispatch
    //   }}
    // >
    <div className="container">
      <h1>Список задач</h1>

      <div className="input-field">
        <input
          type="text"
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          onKeyPress={addTodo}
        />
        <label>Новая задача</label>
      </div>

      <TodoList
        // todos={typeof state !== "undefined" || "null" ? state : initialState}
        todos={todos}
      />
    </div>
    // </Context.Provider>
  );
}
