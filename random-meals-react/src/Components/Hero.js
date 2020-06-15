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
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        const apiFunc = async() => {
            const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await resp.json();
            setInventory(data.meals[0].strMealThumb);
            console.log(data.meals[0].strMealThumb);
        };
        apiFunc()
    }, []);

    return (
        // <div class="meals__hero" style="background-image:url(${data[0].strMealThumb})">
        //   <h3 class="meals__hero-title">${data[0].strMeal}</h3>
        // </div>
        <>
            {
                <div className="meals__hero" style={{backgroundImage:"url("+inventory+")"}}>

                </div>

                // inventory.map((dataItem) => (
                //     dataItem
                // ))
            }
        </>
    );
}

const InventoryItem = (prop) => {
    return (
        //<li>{prop.item.title}</li>
            <h3 class="meals__hero-title">${prop.item.data[0].strMeal}</h3>
        )
}

export const Hero2 = () => {
    const [inventory2, setInventory2] = useState([]);
    useEffect(() => {
        const apiFunc2 = async() => {
            const resp = await fetch('https://sampleapis.com/futurama/api/inventory');
            const data = await resp.json();
            setInventory2(data);
            console.log(data);
        }
        apiFunc2();
    }, []);

    return (
        <>
            <h2>Hero 2</h2>
            <ul>
                {inventory2.map(i => (<InventoryItem2 item={i}/>))}
            </ul>
        </>
    )
}

const InventoryItem2 = (prop) => {
    return (
        <li>{prop.item.title}</li>
    )
}