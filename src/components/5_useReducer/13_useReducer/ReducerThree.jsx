import React, { useReducer } from 'react';
const initial = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initial;
    default:
      return state;
  }
};
function ReducerThree() {
  const [count, dispatch] = useReducer(reducer, initial);
  const [count2, dispatch2] = useReducer(reducer, initial);
  return (
    <div>
      <br />
      <div>
        <div>First Count={count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>

      <div>
        <div>Secound Counter={count2}</div>
        <button onClick={() => dispatch2('increment')}>Increment</button>
        <button onClick={() => dispatch2('decrement')}>Decrement</button>
        <button onClick={() => dispatch2('reset')}>Reset</button>
      </div>
    </div>
  );
}

export default ReducerThree;
