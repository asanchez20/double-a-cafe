import React, {useState} from 'react'



function MenuForm({addDrinkToState}) {

    const [ name, setName ] = useState('')
    const [ image, setImage ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState('')



    const handleNameChange= (e) => {
        return(
            setName(e.target.value)
        )
    }
    const handleImageChange= (e) => {
        return(
            setImage(e.target.value)
        )
    }
    const handleDescriptionChange= (e) => {
        return(
            setDescription(e.target.value)
        )
    }
    const handlePriceChange= (e) => {
        return(
            setPrice(e.target.value)
        )
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        const newDrink = {name, image, description, price}

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            header: { "Content-Type" : "application/json" },
            body: JSON.stringify(newDrink)
        }).then ( () => {
            addDrinkToState(newDrink)
        })

        

    }


    return(
        <div className="new-drink-form" >
            <h2>Customize A Drink!</h2>
            <form onSubmit = {handleSubmit}>
            <input onChange={ handleNameChange } type="text" name="name" placeholder="Drink name" />
            <input onChange={ handleImageChange } type="text" name="image" placeholder="Image URL" />
            <input onChange={ handleDescriptionChange } type="text" name="description" placeholder="Description" />
            <input onChange={ handlePriceChange } type="number" name="price" step="0.01" placeholder="Price" />
            <button type="submit">Add Customized Drink</button>
            </form>
      </div>
    )
}

export default MenuForm;