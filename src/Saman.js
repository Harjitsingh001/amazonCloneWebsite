import React, { useState } from 'react'
import "./Saman.css"
import { useStateValue } from './SttateProvider'


function Saman({ title, image, id, price, rating }) {
    const [state, dispatch] = useStateValue();
    const [showMsg, setshowMsg] = useState(false);
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title: title,
                id: id,
                image: image,
                price: price,
                rating: rating
            }

        })

        // Step 2: Toggle the message visibility when the button is clicked
        setshowMsg(true);

        // Automatically hide the message after a delay (e.g., 3 seconds)
        setTimeout(() => {
            setshowMsg(false);
        }, 1000); // Adjust the delay as needed
    }



    return (
        <div className='saman'>
            <div className='saman__Info'>
                <p>{title}</p>
                <p className='saman__Price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='saman__rating'>
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                    <p>⭐ </p>
                </div>

            </div>
            <img src={image}>
            </img>

            <button onClick={addToBasket} >Add to Basket</button>
            {showMsg && (
                <div className="saman__message">
                    Item added to basket!
                </div>
            )}
        </div>
    )
}

export default Saman















