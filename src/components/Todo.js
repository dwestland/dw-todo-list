import React from "react";

export default function Todo(props) {
  const { task, id, completed, deleteTask } = props;

  return (
    <div>
      <li>
        {task} {completed && <span>dun</span>}
        <button onClick={() => deleteTask(id)}>Delete</button>
      </li>
    </div>
  );
}
