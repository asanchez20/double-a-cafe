import React from "react";
import MenuCard from './MenuCard';
import DisplayCart from './DisplayCart';
import SearchBar from './SearchBar';
import MenuForm from "./MenuForm";

function Menu({coffeeList, onAdd, onRemove, cartItems, addDrinkToState, setSearchString}) {
  
 
    const coffeeItems = coffeeList.map(coffee => {
        return <MenuCard

        key = { coffee.id }
        coffee = { coffee }
        onAdd = { onAdd }
        onRemove = { onRemove }
        />
    })

    return(
        <div className="wrapper">
            <h1>Menu</h1>
            <SearchBar setSearchString = {setSearchString}/>
            <DisplayCart onAdd = { onAdd } onRemove = { onRemove } cartItems = { cartItems } />
            {coffeeItems}
            <MenuForm addDrinkToState = { addDrinkToState }/>
        </div>
    )
}

export default Menu;