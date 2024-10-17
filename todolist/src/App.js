import logo from './logo.svg';
import React from 'react';
import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);  
  const inputRef = useRef(null);

  const Additem = () => {
    const text = inputRef.current.value; 
    if (text) {
      setItems([...items, text]);  
      inputRef.current.value = "";  
    }
  };

  const handleCheckboxChange = (index) => {
    
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input ref={inputRef} type="text" placeholder="Enter your task" />
      <button onClick={Additem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
            />  
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
