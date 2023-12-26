import React, { useCallback, useState } from "react";
import Tasks from "./Tasks";

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([""]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  //  const addTask = () => {
  //  setTasks((task) =>[...task, "New Task"]);
  //  };
  const addTask = useCallback(() => {
    setTasks((t) => [...t, "New Task"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  return (
    <div>
      <div className="first">
        <Tasks tasks={tasks} addTask={addTask} />
      </div>
      <div className="second">
        Count: {count}
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default UseCallBackHook;
