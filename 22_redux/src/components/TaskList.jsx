import React from "react";
import { useSelector } from "react-redux";
import TaskItems from "./TaskItems";

const TaskList = () => {
  const { items, filters } = useSelector(state => state.task);

  const filtered =
    filters === "completed" ? items.filter(task => task.completed) : items;

  return (
    <div>
      <ul className="task-list">
        {filtered.map((task) => {
          return <TaskItems key={task.id} text={task.text} />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
