import React, { useState, useEffect } from "react";

// const meal = ({ data }) => {
//     return (
//       <div id={data.id} class="">
//         <p>{data.title}</p>
//         <p>${data.price}</p>
//         <hr />
//       </div>
//     );
//   };

// const [meals, renderMeals] = useState([]);

// const [items, setItems] = useState([]);

// const getRandomMeals =  async () => {
//     const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//     const data = await resp.json();
//     //renderMeals(data);
// }

// const [items, setItems] = useState([]);
//   const [beers, setBeers] = useState([]);
//   console.log(beers);
//   useEffect(() => {
//     setTimeout(() => getInventoryData(), 0);
//     setBeers(["bee1", "beer2"]);
//   }, []);

// const getInventoryData = async () => {
//     const resp = await fetch("https://sampleapis.com/futurama/api/inventory");
//     const data = await resp.json();
//     setItems(data);
//   };

export const Hero = () => {
    state = {
        loading: true
    }

    // componentDidMount() {

    // }

    return (
        // <div class="meals__hero" style="background-image:url(${data[0].strMealThumb})">
        //   <h3 class="meals__hero-title">${data[0].strMeal}</h3>
        // </div>
        <h1>Hero</h1>
    );
}