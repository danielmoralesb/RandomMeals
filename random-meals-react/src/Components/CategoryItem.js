import React, { useState, useEffect} from "react";

export const CategoryItem = ({item}) => {

    const { strMealThumb, strMeal} = item;

    return (
        <div className="meals__cat">
            <div className="meals__cat-inner" style={{backgroundImage:`url(${strMealThumb})`}}>
                <h3 className="meals__cat-title">{strMeal}</h3>
            </div>
            <a className="meals__cat-link" href="null"><span className="sr-only">{strMeal}</span></a>
        </div>
    )


}
