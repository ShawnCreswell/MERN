import React, { useState } from "react";
import "./App.css";

function App() {

  const [newTodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem])
    setNewtodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filterTodos = todos.filter((todo, index) => {
      return index !== delIdx;
    })

    setTodos(filterTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === idx) {
        todo.complete = !todo.complete;
        // TO avoid mutate the todo directly do this:
        // const updatedTodos = { ...todo, complete: !todo.complete};
        // return updatedTodos;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div> 
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewtodo(event.target.value);
        }} 
        type="text" 
        value={(newTodo)}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

        {/* <hr /> */}

      {
        todos.map((todo, index) =>{
          const todoClasses = ["bold", "italic" ];
          if (todo.complete) {
            todoClasses.push("line-through");
          }
          return (
            <div key={index}>
            <input onChange={(event) => {
              handleToggleComplete(index);
            }} checked={todo.complete} type="checkbox" />
            <span className={todoClasses.join(" ")} >{todo.text}</span>
            <button onClick={(event) => {
              handleTodoDelete(index);
            }}
            style={{ marginLeft: "10px" }}
            >
              Delete</button>
          </div>
        );
        })
      }
    </div>
  );
}

export default App;
