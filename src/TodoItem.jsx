import React, { useState, useContext } from "react";
// import { Context } from "./context";

export default function TodoItem({ title, id, completed }) {
  // const { dispatch } = useContext(Context);
  const [checked, setChecked] = useState(completed);

  return (
    <li className={!checked ? "todo" : "todo completed"}>
      <label className=" deep-purple lighten-5">
        <input
          type="checkbox"
          checked={checked}
          // onChange={() =>
          //   dispatch({
          //     type: "toggle",
          //     payload: id
          //   })
          // }
          onChange={() => setChecked(!checked)}
        />
        <span title="Отметить">{title}</span>

        <i
          className="material-icons  pink-text text-darken-3"
          title="Удалить задачу"
          // onClick={() =>
          //   dispatch({
          //     type: "remove",
          //     payload: id
          //   })
          // }
        >
          delete_sweep
        </i>
      </label>
    </li>
  );
}
