import React, { useState } from "react";
import Todo from "./Todo";

export default function Todos() {
  const initialState = [
    { id: 1, task: "Eat", completed: false },
    { id: 2, task: "Sleep", completed: true },
    { id: 3, task: "Code", completed: false }
  ];

  const [list, setList] = useState(initialState);
  const [newTask, setNewTask] = useState("");

  const deleteTask = id => {
    setList(list.filter(item => item.id !== id));
  };

  const generateId = () => {
    let id = Math.random()
      .toString(36)
      .substr(2, 9);
    return id;
  };

  const handleAddTodo = task => {
    if (!task) {
      alert("Please enter new task");
      return;
    }
    const newId = generateId();
    const newTask = { id: newId, task, completed: false };
    setList([...list, newTask]);
    setNewTask("");
  };

  const completeTask = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return item = {...item, completed: true}
      }
      return item
    })
      setList(newList)
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {!list.length ? <p>All done!</p> : ""}
      <ul>
        {list.map(item => {
          return (
            <Todo
              completeTask={completeTask}
              completed={item.completed}
              deleteTask={deleteTask}
              id={item.id}
              key={item.id}
              task={item.task}
            />
          );
        })}
      </ul>
      <hr />
      <p>Add New Task</p>
      <input
        onChange={e => setNewTask(e.target.value)}
        placeholder="New Task"
        type="text"
        value={newTask}
      />
      &nbsp;
      <button onClick={() => handleAddTodo(newTask)}>Add Todo</button>
    </div>
  );
}
