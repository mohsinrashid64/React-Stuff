import React from 'react';
import { useFormAction } from 'react-router-dom';

function App() {
  const action = useFormAction(); // Get the resolved form action

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission using the resolved action
    console.log('Form submitted with action:', action);
    // You can make an API request here or perform other actions based on the resolved action.
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action={action} method="post">
        <input type="text" name="data" placeholder="Data" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
