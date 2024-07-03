import React from "react";

function NewTaskForm({ categories, tasks, setTasks}) {

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.text.value)
    setTasks([...tasks, {"text":e.target.text.value,"category":e.target.category.value}])
  }

  return (
    <form className="new-task-form" onSubmit = {handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories
            .filter(category => category !== "All")
            .map(category => <option key = {category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
