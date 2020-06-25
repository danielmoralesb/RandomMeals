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
    // is a convencion to have a name and set whatever the name is
    const [hero, setHero] = useState([]);
    useEffect(() => {
        const getHero = async() => {
            const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await resp.json();
            setHero(data.meals[0]);
        };
        getHero()
    }, []);

    return (
        <>
            <section className="meals__hero-wrapper">
                <h2 className="page-subtitle">Meal of the Day</h2>
                <div className="meals__random">
                    <div className="meals__hero" style={{backgroundImage:`url(${hero.strMealThumb})`}}>
                        <h3 className="meals__hero-title">{hero.strMeal}</h3>
                    </div>
                </div>
            </section>
        </>
    );
}