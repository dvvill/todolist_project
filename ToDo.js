import React from "react";




function ToDo (props) {
    return(
        <li className="todo">
                <div className="todo-list">
                        <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                            <label className="todo-label" htmlFor={props.id}>
                                {props.name}
                            </label>
                        <button type="button" className="edit-btn">
                                Edit 
                        </button>
                        <button type="button" className="delete-btn btn__danger">
                                Delete 
                        </button>
                </div>    
         </li>
    );
};

export default ToDo;




