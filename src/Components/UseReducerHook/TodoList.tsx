import React, { useReducer } from 'react'

export const TodoList = () => {
  const initialState = [
    // an array of objects in the initial state (List of 5 items with id, title and check as key fields)
    {
      id: 1,
      title: "Todo 1",
      check: false, // check: false denotes that the current item is unchecked (Task pending to-do in the context of the example)
    },
    {
      id: 2,
      title: "Todo 2",
      check: false,
    },
    {
      id: 3,
      title: "Todo 3",
      check: false,
    },
    {
      id: 4,
      title: "Todo 4",
      check: false,
    },
    {
      id: 5,
      title: "Todo 5",
      check: false,
    },
  ];

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleCheck = (item: { id: any; check?: boolean; title?: string  }) => {
    dispatch({ type: "CHECK", id: item.id });
  }; // dispatch method called for the action type as "CHECK" along with items' id

  function reducer(state: { id: React.Key; check: any; title: any;}[], action: { type: any; id: any; }){
    switch(action.type){
     case "CHECK":  //action type: "CHECK"
      return state.map((item: { id: any; check: any; title: any}) => { // JavaScript map function used to loop through the items in the list
        if(item.id === action.id) { // if items' id matches with the id mentioned in the action
          return { ...item, check: !item.check }; // check state value will be reverted before sending the new state
        } 
        else{
          return item; // returning current item state item 
        }
      });
     default: return state; // If above cases don't match with the action type, then the current state object will be returned with all items unchecked
  }
  }
  return (
    <>
     {state.map((item) => (
          <div key={item.id}>
    
            {/* id of the item taken as key */}
            <label>
              <input // input box (checkbox) to maintain completed and the pending tasks in the context of the example
                type="checkbox"
                checked={item.check}
                onChange={() => handleCheck(item)} // handleClick function will be called if the checkbox is clicked by the user
              />
              {item.title}
            </label>
          </div>
        )
      )}
    </>
  );
}
