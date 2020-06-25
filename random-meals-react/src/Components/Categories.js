import React, { useState, useEffect} from "react";
import { CategoriesItem } from "./CategoriesItem";

export const Categories = () => {
    const [cat, setCat] = useState([]);
    useEffect(() => {
        const getCat = async() => {
            const resp = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await resp.json();
            setCat(data.categories);
            console.log(data.categories)
        };
        getCat();
    }, []);

    return (
        <>
            <section className="meals__cats-wrapper">
                <h2 className="page-subtitle">Meal Categories</h2>
                <div className="meals__cats">
                    {cat.map(i => (<CategoriesItem key={i.idCategory} item={i}/>))}
                </div>
            </section>
        </>
    );
}