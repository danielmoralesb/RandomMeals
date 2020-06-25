import React, { useState, useEffect } from 'react';
import './App.css';
// import { Hero } from "./Components/Hero";
import { Categories } from "./Components/Categories";
import { Category } from "./Components/Category";

function App() {
  return (
    <div>
      {/* <h1 className="page-title">Random Meals</h1>
      <Hero/>*/}
      <Categories />
      <Category type="dessert"/>
    </div>
  );
}

export default App;

// How to display Category

// How to pass a category selected as a prop