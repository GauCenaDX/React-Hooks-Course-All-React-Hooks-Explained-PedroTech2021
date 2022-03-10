import React, { useState } from 'react';

const StateTutorial = () => {
  // let counter = 0;

  // const increment = () => {
  //   counter = counter + 1;
  //   console.log(counter);
  // }

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const [inputValue, setInputValue] = useState('Default Text');

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <div>
        {counter}
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <input placeholder='enter something...' onChange={onChange} />
        {inputValue}
      </div>
    </div>);
}

export default StateTutorial;