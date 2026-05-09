import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {addTask} from '../features/task/taskSlice'

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
    setText('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="form">
        <input
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="input"
        />

        <button className="button" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
