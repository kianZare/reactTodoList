import React, {useState} from 'react';
import './App.css';
import Form from './Component/Form';
import ToDoList from './Component/ToDoList';

function App() {

  const[inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
      <h1>To Do List</h1>
      </header>
      <Form todos={todos}
      setTodos={setTodos} 
      inputText={inputText}
      setInputText={setInputText}
      />
      <ToDoList todos={todos}/>
    </div>
  );
};

export default App;
