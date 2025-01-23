import React, { useState } from 'react';
import './Calculator.css';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Handle input change
  const handleInputChange = (value) => {
    setInput((prev) => prev + value);
  };

  // Handle clear button
  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  // Handle calculation
  const handleCalculate = () => {
    try {
      setOutput(eval(input)); // `eval()` computes the input string as an expression
      setInput('');
    } catch (error) {
      setOutput('Error');
    }
  };

  // Handle backspace (delete last character)
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <>
    <h1 className='heading'>Calculator</h1>
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{output}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleInputChange('1')}>1</button>
        <button onClick={() => handleInputChange('2')}>2</button>
        <button onClick={() => handleInputChange('3')}>3</button>
        <button onClick={() => handleInputChange('+')}>+</button>

        <button onClick={() => handleInputChange('4')}>4</button>
        <button onClick={() => handleInputChange('5')}>5</button>
        <button onClick={() => handleInputChange('6')}>6</button>
        <button onClick={() => handleInputChange('-')}>-</button>

        <button onClick={() => handleInputChange('7')}>7</button>
        <button onClick={() => handleInputChange('8')}>8</button>
        <button onClick={() => handleInputChange('9')}>9</button>
        <button onClick={() => handleInputChange('*')}>*</button>

        <button onClick={() => handleInputChange('0')}>0</button>
        <button onClick={() => handleInputChange('.')}>.</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleInputChange('/')}>/</button>

        <button onClick={handleBackspace}>←</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
    <p className='created'>Created by Divy Khandelwal</p>
  </>
  );
};

export default App;
