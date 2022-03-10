import React, { useState } from "react"
import './App.css';

export default function App() {
  const [task, setTask] = useState('');
  const [list, updateList] = useState([]);

  function handleChange (evt) {
    setTask(evt.target.value);
  }

  function handleSubmit() {
    updateList(arr => [...arr, task]);
  }

  return (
    
    <div className = "App">
      <h1>To-do List </h1>
      <input
        placeholder="Add Task"
        type = 'text'
        value = {[task]}
        onChange = {handleChange}
      />

      <input
        value = "Add Task"
        type = 'submit'
        onClick = {handleSubmit}
        />
      
      <div>
        {list.map(e => <div>{ e }</div> )} 
      </div>

    </div>

    

  )
}

