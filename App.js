import React, { useState, useEffect } from "react"; 
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CompletedList from "./CompletedList";
import ToDoList from "./ToDoList";
import GifList from './GifList';
import axios from 'axios';


function App(props) {
    const [data, setData] = useState([]);

    const DATA = [
      { id: "todo-0", name: "To-Do 1 ", completed: true },
      { id: "todo-1", name: "To-Do 2", completed: false },
      { id: "todo-2", name: "To-Do 3", completed: false }
    ];
    
    useEffect(() => {
        axios(`http://api.giphy.com/v1/gifs/trending?&limit=3&api_key=EmU9dpXgxO9PChhSA8GxpHFFNVqwufK1`)
        .then(response => setData(response.data.data))
        .catch(error => console.log('error fetching and parsing data', error))
        ;
      }, []);

  return (
    <div className="App">
        <h1>Todo App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ToDoList" element={<ToDoList tasks={DATA}/>} />
       <Route path="CompletedList" element={<CompletedList/>}/>
      </Routes>

      <div className="gif-section">
        <GifList data={data} />
      </div>

        <nav className="nav-link">
                <Link to="/ToDoList">To Do List</Link>
                <Link to="/CompletedList">Completed List</Link>
        </nav> 

</div>
  );
  }
  function Home() {
    return (
      <>
  
      </>
    );
  }


export default App;