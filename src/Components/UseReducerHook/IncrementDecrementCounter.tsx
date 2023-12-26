import React, { useReducer } from "react";

const IncrementDecrementCounter = () => {
  const [state, Dispatch] = useReducer(reducer, 0);
  function reducer(state: number, action: { type: string }) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;

      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() =>
            Dispatch({
              type: "INCREMENT",
            })
          }
        >
          Plus by 1
        </button>
        <button
          type="button"
          onClick={() =>
            Dispatch({
              type: "DECREMENT",
            })
          }
        >
          Minus by 1
        </button>
      </div>
      <div>
        <text type="text">Counter: {state}</text>
      </div>
    </>
  );
};

export default IncrementDecrementCounter;
