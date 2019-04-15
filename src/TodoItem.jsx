import React, { useContext } from "react";
import { Context } from "./context";

export default function TodoItem({ title, id, completed }) {
  // const { dispatch } = useContext(Context);
  // const [checked, setChecked] = useState(completed);
  const { toggleTodo, removeTodo } = useContext(Context);

  return (
    <li className={!completed ? "todo" : "todo completed"}>
      <label className=" deep-purple lighten-5">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span title="Отметить">{title}</span>

        <i
          className="material-icons  pink-text text-darken-3"
          title="Удалить задачу"
          onClick={() => removeTodo(id)}
        >
          delete_sweep
        </i>
      </label>
    </li>
  );
}
