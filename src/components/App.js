import React from "react";
import { useState} from "react"

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory)

  const deleteTask = (e) =>{
    setTasks(tasks.filter(task=> task.text !== e.target.parentNode.id))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>
      <NewTaskForm categories = {CATEGORIES} tasks = {tasks} setTasks = {setTasks}/>
      <TaskList tasks = {filteredTasks} setTasks = {setTasks} deleteTask = {deleteTask}/>
    </div>
  );
}

export default App;
