import React, { useState } from "react";
import ToDo from "./ToDo";
import Form from "./Form";
import { nanoid } from "nanoid";



function ToDoList(props) {
    const [tasks, setTasks] = useState(props.tasks);

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(updatedTasks);
      }

    const taskList = tasks.map(task => (
        <ToDo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        )
      );

      function addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        setTasks([...tasks, newTask]);
      }


      const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
const headingText = `${taskList.length} ${tasksNoun} remaining`;

    return (
        <div>
            <div className="todo-list-view">
                    <h1>To Do List</h1>
                    <h2 id="list-heading">
                    {headingText}
                    </h2>
                <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">

                {taskList}
                    
                </ul>
            </div>
      
            <Form addTask={addTask}/>
        </div>
    );
}

export default ToDoList;