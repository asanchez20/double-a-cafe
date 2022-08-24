import React from "react";



function DisplayCart({cartItems, onAdd, onRemove}) {

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 5;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return(
        <div className="display-cart">
            <h2>Cart</h2>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <img className='col-2' src={item.image} alt="item" />
                    <div className='col-2' >{item.name}</div>
                    <div className='col-2' >
                        <button onClick={() => onAdd(item)} className='add'>+</button>
                        <button onClick={() => onRemove(item)} className='remove'>-</button>
                    </div>
                <div className='col-2 text-right' >
                     {item.qty} x ${item.price.toFixed(2)}
                </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className = "row">
                        <div>Items Price</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className = "row">
                        <div>Tax Price</div>
                        <div>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className = "row">
                        <div>Shipping Price</div>
                        <div>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className = "row">
                        <div>Total Price</div>
                        <div><strong>${totalPrice.toFixed(2)}</strong></div>
                    </div>

                </>
            )}
        </div>
    )
}


export default DisplayCart;