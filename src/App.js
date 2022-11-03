import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todoslist from './components/Todoslist';

function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodos, setEditTodos] = useState(null)

  return (

    <div className='container'>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodos={editTodos}
            setEditTodos={setEditTodos}
          />
        </div>
        <Todoslist todos={todos} setTodos={setTodos} setEditTodos={setEditTodos} />
      </div>
    </div>

  );
}

export default App;
