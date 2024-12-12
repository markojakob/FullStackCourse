import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // State to hold the list of to-dos
  const [todo, setTodo] = useState(""); // For storing the input value
  const [todos, setTodos] = useState([]); // For storing the list of to-dos

  // Handle adding a to-do
  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]); // Add new to-do to the list
      setTodo(""); // Clear the input field after adding
    }
  };

  // Handle deleting a to-do
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove to-do at the given index
    setTodos(newTodos);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ padding: '50px' }}>
      <h1>Add ToDoList</h1>

      <div className="d-flex mb-3">
        <input
          style={{ height: '34px', borderRadius: '10px 0px 0px 10px' }}
          type="text"
          placeholder="Enter ToDo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)} // Update state as user types
          className="form-control"
        />
        <button
          style={{
            height: '34px',  // Same height as input
            borderRadius: '0px 10px 10px 0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 15px'
          }}
          onClick={handleAdd} // Call handleAdd when clicked
          type="button"
          className="btn btn-primary">
          Add
        </button>
      </div>

      {/* Display the list of to-dos */}
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{todo}</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" name="" id="" style={{ marginRight: '10px', marginLeft:"50px" }} />
              <button
                onClick={() => handleDelete(index)} // Call handleDelete with the index
                className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
