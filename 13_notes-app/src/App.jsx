import React, { useState } from "react";

const App = () => {
  const [head, setHead] = useState("");
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  const submit = (e) => {
    e.preventDefault();

    const recentTasks = [...task];

    recentTasks.push({ head, text });
    setTask(recentTasks);

    setHead("");
    setText("");
  };

  const deleteNote = (idx) =>{
    const recentTasks = [...task];
    recentTasks.splice(idx, 1);
    setTask(recentTasks);
  }
  return (
    <div className="h-screen lg:flex bg-black text-white p-10">
      <form
        className="flex items-start gap-4 lg:w-1/2"
        onSubmit={(e) => submit(e)}
      >
        <div className="flex w-1/2 gap-5 items-start flex-col">
          <h1 className="text-3xl font-bold">Add Notes</h1>

          <input
            type="text"
            placeholder="Enter Notes Heading"
            value={head}
            onChange={(e) => {
              setHead(e.target.value);
            }}
            className="px-5 py-2 border-2 font-medium rounded w-full outline-none"
          />

          <textarea
            type="text"
            placeholder="Enter notes"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="px-5 py-2 h-40 font-medium border-2 rounded w-full outline-none"
          />

          <button className="bg-white active:bg-gray-500 active:scale-95 text-black px-5 py-2 rounded w-full outline-none font-medium">
            Add Notes
          </button>
        </div>
        <img
          className="h-80"
          src="https://pngimg.com/uploads/sticky_note/sticky_note_PNG18899.png"
          alt="notes"
        />
      </form>

      <div className=" p-5 lg:w-1/2  lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto items-start justify-start">
          {task.map((item, idx) => {
            return(
              <div
                key={idx}
                className="h-70 w-50 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] text-black px-10 pt-7 pb-3 flex flex-col justify-between"
              >
                <div>
                  <h3 className="leading-tight text-2xl font-bold overflow-hidden">
                  {item.head}
                </h3>
                <p className="mt-2 leading-tight font-medium text-gray-700 overflow-hidden">
                  {item.text}
                </p>
                </div>   

                <button onClick={() =>{
                  deleteNote(idx)
                }} className="w-full cursor-pointer active:scale-95 bg-red-400 text-white rounded-3xl p-1 text-xs font-bold">Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
