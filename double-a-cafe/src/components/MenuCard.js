import React from 'react'
// import MenuForm from './MenuForm'


function MenuCard({coffee, onAdd}) {


    return(
        <div className= 'card'>
            <img src = {coffee.image} alt={coffee.name} className="card-image"/>
            <div className="card-content">
            <div className="coffee-title">{coffee.name}</div>
            <p className="coffee-text">{coffee.description}</p>
            <p className="coffee-price">${coffee.price}0</p>
            <button className="add-to-cart" onClick={() => onAdd(coffee)} type='submit'>Add To Cart</button>
            </div>
        </div>
    );
}

export default MenuCard;