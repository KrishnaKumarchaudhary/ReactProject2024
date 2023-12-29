import React, { useRef } from "react";

export const CounterWithUserRef = () => {
  var refValue = useRef<number>(0);
  const handler = () => {
    refValue.current = refValue.current + 1;
    console.log(refValue.current);
  };

  return (
    <div>
      <div>{refValue.current}</div>
      <button type="button" onClick={handler}>
        Please click me!
      </button>
    </div>
  );
};
