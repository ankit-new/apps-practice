import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () =>{
    if(task.trim() === '') return 
    setTodos([...todos , task])
    setTask("")
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); 
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
        <div className="flex mb-4">
          <input
            onChange={(e) => {
              setTask(e.target.value);
             
            }}
            placeholder="Enter a new Task"
            className="flex-grow p-2 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={addTodo} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Add
          </button>
        </div>

        <ul className="list-none space-y-2">
            {todos.map((todo , index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-gray-200 rounded">
                    <span>{todo}</span>
                    <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 hover:text-red-700 transition"
              >
                Delete
              </button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
