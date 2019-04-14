// import React, { useState } from "react";

const initialState = [
  { id: 1, title: "First todo", completed: false },
  { id: 2, title: "Second todo", completed: true }
];

export default function reducer(state = initialState, action) {
  console.log(state);

  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false
        }
      ];
    case "toggle":
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case "remove":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}
