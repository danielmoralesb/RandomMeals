import React, { useState, useEffect } from "react";
import { CategoryItem } from "./CategoryItem";

export const Category = ({type}) => {
    const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
    const [cat, setCat] = useState([]);
    useEffect(() => {
        const getCat = async() => {
            const resp = await fetch(`${API_URL}${type}`);
            const data = await resp.json();
            setCat(data.meals);
        };
        getCat();
    }, []);

    return (
        <section className="meals__cats-wrapper">
            <h2 className="page-subtitle">Meal Category Details: {type}</h2>
            <div className="meals__cats">
                {cat.map(i => (<CategoryItem key={i.idMeal} item={i}/>))}
            </div>
        </section>
    )
}