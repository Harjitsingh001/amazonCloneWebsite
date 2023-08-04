import React from 'react'
import "./Checkout.css"
import CheckoutProducts from './CheckoutProducts'
import { useStateValue } from './SttateProvider'
import "./Subtotal"
import Subtotal from './Subtotal'
function Checkout() {
        const[{basket ,user},dispatch]=useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                />
                <div className='checkout__title'>
                    {/* <h4>You Logged in By : {user.email}</h4> */}
                    <h4>You Logged in By: {user ? user.email : 'Guest'}</h4>
                    <h2>Your shopping basket </h2>
                {basket.map(items =>(
                    <CheckoutProducts
                    id={items.id}
                    title={items.title}
                    price={items.price}
                    rating={items.rating}
                    image={items.image}
                    
                    />
                ))}
                </div>
            </div>

            {/* right div for total  money   of items  */}
            
            <div className='checkout__right'>
                <Subtotal/>   
            </div>
        </div>
    )
}
export default Checkout