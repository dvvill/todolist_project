import React from "react"; 
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CompletedList from "./CompletedList";
import ToDoList from "./ToDoList";




function App() {
   return (
    <div className="App">
        <h1>Todo App</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ToDoList" element={<ToDoList />} />
        <Route path="CompletedList" element={<CompletedList/>}/>
      </Routes>

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