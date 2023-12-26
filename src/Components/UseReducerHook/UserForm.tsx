import React, { useReducer } from 'react'

export const UserForm = () => {
  const initialState = {
    name: "krishna kumar chaudhary",
    age: 28
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state: {name: string, age: number}, action: { type: any; Name: string }){
    switch (action.type) {
      case "change":
        return { name: action.Name, age: state.age };
      case "increment":
        return { name: state.name, age: state.age + 1 };
      case "decrement":
        return { name: state.name, age: state.age - 1 };
      default: throw Error("Some thing went wrong!");  
    }
  }
  return (
    <>
      {/* input box with initial value as state.name i.e, 'krishna' What we
      type in the text box will be treated as the new target value and hence,
      the dispatch method with action type: 'change' will be called */}
      <input
        value={state.name}
        onChange={(e) => dispatch({ type: "change", Name: e.target.value })}
      />
      {/* On clicking the increment age button, the dispatch method with action
      type: 'increment' will be called to increment the age value dynamically by
      1 */}
      <button onClick={() => dispatch({
        type: "increment",
        Name: state.name
      })}>
        Increment age
      </button>
      {/* On clicking the decrement age button, the dispatch method with action
      type: 'decrement' will be called to decrement the age value dynamically by
      1 */}
      <button onClick={() => dispatch({
        type: "decrement",
        Name: state.name
      })}>
        Decrement age
      </button>
       {/* Age and name state values will be displayed after rendering */}
      <p>
        Age of {state.name} is {state.age}
      </p>
    </>
  );
}
