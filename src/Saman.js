import React from 'react'
import "./Saman.css"
import { useStateValue } from './SttateProvider'


function Saman({title, image,id, price, rating}) {
    const [state,dispatch]=  useStateValue();
    const addToBasket =()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                title:title,
                id:id,
                image:image,
                price:price,
                rating:rating
            }
            
        })
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
                    <p>⭐</p>
                </div>

            </div>
            <img src={image}>
            </img>

            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )   
}

export default Saman