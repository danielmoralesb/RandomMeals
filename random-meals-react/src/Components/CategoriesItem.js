import React, { useState, useEffect} from "react";

export const CategoriesItem = ({item}) => {

    const {strCategoryThumb, strCategory} = item;

    function _passItem(strCategory) {
        console.log(strCategory);
    }

    return (
        <div className="meals__cat">
            <div className="meals__cat-inner" style={{backgroundImage:`url(${strCategoryThumb})`}}>
                <h3 className="meals__cat-title">{strCategoryThumb}</h3>
            </div>
            <button className="meals__cat-link" onClick={() => _passItem(strCategory)}><span className="sr-only">{strCategory}</span></button>
        </div>
    )


}
