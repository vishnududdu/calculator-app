import React, { useState } from 'react';
import './App.css';

function App() {
  let [input, setInput] = useState('');  // Input string shown on the display
  let [result, setResult] = useState(null);  // Store calculation result

  // Handle digit and operator buttons
  const handleClick = (value) => {
    setInput(input + value);  // Append the value to the input
  };

  // Perform calculation when "=" is pressed
  const handleEquals = () => {
    try {
      let total=eval(input);
      setInput(total);  // Clear input after evaluation
    } catch (error) {
      setResult('Error'); 
       // Show error if calculation fails
    }
  };

  // Clear everything
  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className="display">
        {result !== null ? result : input || '0'}    {/* Show result or input */}
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleEquals}>=</button>
          <button className="operator" onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
