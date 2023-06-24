
import React from "react";
import './../styles/App.css';


import React, { useState, useEffect } from "react";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const updateSuggestions = (value) => {
      const filteredSuggestions = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    };

    const delayDebounceFn = setTimeout(() => {
      updateSuggestions(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for fruits..."
      />
      <ul>
        {suggestions.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
