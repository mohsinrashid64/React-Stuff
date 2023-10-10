import React, { useState, useEffect } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);

  // Function to handle the click event
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    // Add the click event listener when the component mounts
    document.addEventListener('click', handleClick);

    // Cleanup function: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array for componentDidMount-like behavior

  return (
    <div>
      <p>Click count: {clickCount}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
