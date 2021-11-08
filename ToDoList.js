import React from "react";

function ToDoList() {
    return (
        <div>
            <div className="todo-list-view">
                    <h1>To Do List</h1>
                    <h2 id="list-heading">
                        3  remaining To-Dos
                    </h2>
                <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">

                    <li className="todo">
                        <div className="todo-list">
                            <input id="todo-0" type="checkbox" defaultChecked={true} />
                            <label className="todo-label" htmlFor="todo-0">
                                To-Do 1
                            </label>
                            <button type="button" className="edit-btn">
                                Edit 
                            </button>
                            <button type="button" className="delete-btn btn__danger">
                                Delete 
                            </button>
                        </div>    
                    </li>

                    <li className="todo">
                        <div className="todo-list">
                             <input id="todo-1" type="checkbox" />
                             <label className="todo-label" htmlFor="todo-1">
                                To-Do 2
                             </label>
                            <button type="button" className="edit-btn">
                                Edit
                            </button>
                            <button type="button" className="delete-btn btn__danger">
                                Delete 
                            </button>
                        </div>   
                    </li>

                    <li className="todo">
                        <div className="todo-list">
                                <input id="todo-2" type="checkbox" />
                                <label className="todo-label" htmlFor="todo-2">
                                    To-Do 3
                                </label>
                            <button type="button" className="edit-btn">
                                Edit 
                            </button>
                            <button type="button" className="delete-btn btn__danger">
                                Delete 
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
      

         <form>
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
                    autoComplete="off"/>
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
        </div>
    );
}

export default ToDoList;