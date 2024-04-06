import React, { useRef, useState } from 'react';

function FormExample() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      setError('Please enter a value.');
      inputRef.current.focus();
      return;
    }
    console.log('Submitted value:', inputValue);
    setInputValue('');
    setError('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  return (
    <div>
      <h2>Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input">Enter a value:</label>
          <input
            type="text"
            id="input"
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormExample;
