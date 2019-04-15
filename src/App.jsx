import React, { useState, useEffect } from "react";
import { Context } from "./context";
import TodoList from "./TodoList";
import axios from "axios";

const API = "https://newtodohooks.firebaseio.com/tasks.json";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API);
        const task = [];
        Object.values(response.data).map(item => {
          task.push(item);
          return task;
        });
        await setTodos(task);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = async e => {
    if (todoTitle !== "" && e.key === "Enter") {
      const task = {
        id: Date.now(),
        title: todoTitle,
        completed: false
      };

      try {
        await axios.post(API, task);
      } catch (e) {
        console.log(e);
      }

      setTodoTitle("");
    }
  };

  const removeTodo = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        toggleTodo,
        removeTodo
      }}
    >
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

        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}
