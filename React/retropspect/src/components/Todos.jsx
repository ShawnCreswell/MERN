import React from "react";
import { Link, useOutletContext } from "react-router-dom";
const Todos = () => {
  const todos = useOutletContext();
  return (
    <fieldset>
      <legend>Todos</legend>
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
              </li>
            );
          })}
      </ul>
    </fieldset>
  );
};
export default Todos;
