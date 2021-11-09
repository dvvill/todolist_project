import React from "react";
import { useState } from "react/cjs/react.development";
import ToDo from "./ToDo";

function ToDoList(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
       
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    function addTask(name) {
        alert(name);
    }

    return (
        <div>
            <div className="todo-list-view">
                    <h1>To Do List</h1>
                    <h2 id="list-heading">
                        3  remaining To-Dos
                    </h2>
                <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">

                    <ToDo name="To-Do 1" completed={true} id="todo-0" />
                    <ToDo name="To-Do 2" completed={false} id="todo-1" />
                    <ToDo name="To-Do 3" completed={false} id="todo-2" />
                    
                </ul>
            </div>
      

         <form onSubmit={handleSubmit} addTask={addTask}>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        Make a new To-Do
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}/>
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
        </div>
    );
}

export default ToDoList;