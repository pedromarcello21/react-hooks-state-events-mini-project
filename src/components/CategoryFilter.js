import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  // const filterDisplay = (e) =>{
    
  //   e.target.className = "selected"
  //   console.log(e.target.className)
  //   // categories.map(category => category.className = setSelected(""))
  //   // console.log(categories)
  //   // const category = e.target
  //   // category.className = setSelected("selected")
  //   // console.log(category)
  //   // const filtered = tasks.filter(task => task.category === category.target)
  //   // setTasks(tasks = filtered)
  //   }

  const handleClick = (category) =>{
    setSelectedCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => 
        <button key = {category} className = {selectedCategory === category ? "selected" : ""}onClick = {() => handleClick(category)}>
        {category}
        </button>)}
    </div>
  );
}

export default CategoryFilter;
