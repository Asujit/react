import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "../features/task/taskSlice";

const TaskItems = (task) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li className={`task ${task.completed ? 'completed' : ''}`}>{task.text}</li>

      <div>
        <button
          className="button"
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          className="button delete"
          onClick={() => dispatch(delete task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItems;
