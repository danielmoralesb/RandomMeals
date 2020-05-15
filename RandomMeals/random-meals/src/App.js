import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(resp => resp.json())
  .then(data => renderMeals(data.meals))
  .catch(error => console.log(error));

  function renderMeals(data) {
    console.log(data[0].strMeal)
  }
}

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Daniel',
  lastName: 'Morales'
};

const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
);

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )

export default App;
