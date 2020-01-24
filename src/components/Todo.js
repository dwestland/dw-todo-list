import React from "react";
import PropTypes from 'prop-types'
import './Todo.css'

export default function Todo(props) {
  const { completed, completeTask, deleteTask, id, task } = props;

  return (
    <div>
      <li>
        <span className={completed ? "task": ""}>{task}</span>
        &nbsp;
        <button onClick={() => completeTask(id)}>Completed</button>
        &nbsp;
        <button onClick={() => deleteTask(id)}>Delete</button>
      </li>
    </div>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  task: PropTypes.string.isRequired
}
