import React from "react";
import "./App.css";
//import UseReducerHook from './Components/UseReducerHook/IncrementDecrementCounter';
// import { UserForm } from './Components/UseReducerHook/UserForm';
import { TodoList } from "./Components/UseReducerHook/TodoList";

function App() {
  return (
    <div className="App">
      {/* <UseReducerHook/> */}
      {/* <UserForm /> */}
      <TodoList />
    </div>
  );
}

export default App;
