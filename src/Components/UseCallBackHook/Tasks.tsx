import React, { memo } from "react";

const Tasks = (props: { tasks: any[]; addTask: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
  console.log("child rendered");
  return (
    <div>
      <h2>Tasks list</h2>
      {props.tasks.map(
        (
          task:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined,
          i: React.Key | null | undefined
        ) => (
          <p key={i}>{task}</p>
        )
      )}
      <button onClick={props.addTask}>Add Task</button>
    </div>
  );
};
//export default  Tasks;
export default memo(Tasks);
