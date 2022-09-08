import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ShowTodo = () => {
  const { id } = useParams();
  const todos = useOutletContext();
  const [todo, setTodo] = useState();

  useEffect(() => {
    setTodo(todos, [id-1])
  })

  return (
    <fieldset>
      <legend>ShowTodo</legend>

        {todo &&
        <div>
          <h2>Todo #{todo.id}</h2>
          <p>Title {todo.title}</p>
          <p>Complete: {todo.completed ? 'true' : 'false'}</p>
        </div>}
  
    </fieldset>
  );
};

export default ShowTodo;
