import React, { useState } from 'react';
import './TodoList.css';



function TodoList() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: event.target.todo.value,
      completed: false,
    };
    addTodo(newTodo);
    event.target.todo.value = '';
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  }
 
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

    return (
    <div className='todo-list'>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="Enter a new todo item" />
        <button type="submit">Add</button>
      </form>
      <ul>
       {todos.map((todo) => (
         <li key={todo.id}>
         <input
             type="checkbox"
             checked={todo.completed}
             onChange={() => handleToggle(todo.id)}
           />
         {todo.text}
         <button onClick={() => handleDelete(todo.id)}>Delete</button>
         </li>
       ))}
     </ul>
    </div>
  );
  }
  export default TodoList;
  