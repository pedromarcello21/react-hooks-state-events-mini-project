import React from "react";
import Task from "./Task"



function TaskList({tasks, setTasks, deleteTask}) {

  return (
    <div className="tasks">
      {tasks.map(task => <Task key = {task.text} id = {task.text} task={task} deleteTask = {deleteTask}/>)}
    </div>
  );
}

export default TaskList;
