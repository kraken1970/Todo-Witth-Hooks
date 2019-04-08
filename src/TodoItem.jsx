import React, { useContext } from "react";
import { Context } from "./context";

export default function TodoItem({ title, id, completed }) {
  const { dispatch } = useContext(Context);

  return (
    <li className={!completed ? "todo" : "todo completed"}>
      <label className=" deep-purple lighten-5">
        <input
          type="checkbox"
          checked={completed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: id
            })
          }
        />
        <span title="Отметить">{title}</span>

        <i
          className="material-icons  pink-text text-darken-3"
          title="Удалить задачу"
          onClick={() =>
            dispatch({
              type: "remove",
              payload: id
            })
          }
        >
          delete_sweep
        </i>
      </label>
    </li>
  );
}
