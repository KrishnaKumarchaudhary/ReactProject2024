import React from "react";
import "./App.css";
import UseCallBackHook from "./Components/UseCallBackHook/UseCallBackHook";
//import UseReducerHook from './Components/UseReducerHook/IncrementDecrementCounter';
// import { UserForm } from './Components/UseReducerHook/UserForm';
// import { TodoList } from "./Components/UseReducerHook/TodoList";

function App() {
  return (
    <div className="App">
      {/* <UseReducerHook/> */}
      {/* <UserForm /> */}
      {/* <TodoList /> */}
      <UseCallBackHook/>
    </div>
  );
}

export default App;
