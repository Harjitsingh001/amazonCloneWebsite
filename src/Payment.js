import React, { useEffect , useState } from 'react'
import { useStateValue } from "./SttateProvider";
import CheckoutProducts from './CheckoutProducts';
import { Link  } from 'react-router-dom';
import "./Payment.css"
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from './Reducer';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Payment = () => {


    const navigate =useNavigate();  

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const Elements = useElements();


    // stastes to manage the error and set in stripe functionality

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret,setClientSecret] = useState(true);

     useEffect( () =>{
    // generate spl stripe secret which allows us to  charge  a customer

    const getClientSecret = async() =>{
        const responce =await axios({
            method: 'post',
            url:'/payment/create>total=${getBasketTotal(basket) * 100}'
        })
        setClientSecret(responce.data.clientSecret)
    }
    getClientSecret();
   },[basket])
    

    const handleSubmit = async (e) => {
        // do all fancy stripe stuff.... 

        e.preventDefault();
        setProcessing(true);

        const payload =  await stripe.confirmCardPayment(clientSecret,{
            payment_method:
            {       
                card: Elements.getElement(CardElement)
            }
        }).then(({ paymentIntent}) =>{
             //   payment(Intent = payment  config
             setSucceeded(true);
             setError(null);
             setProcessing(false);

             navigate.replace('/orders')
        })
        
    
    }
    const handleChange = e => {
        // listen for allchanges in cardElement
        //and display any error as customer types invalid card detail
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }



    return (
        <div className='payment'>

            <div className='payment_container'>
                <h2>
                    Checkout(<Link to="/checkout">{basket?.length}items</Link> )
                </h2>
                {/* delivery address */}
                <div className='payment_section'>

                    <div className='payment_title'>
                        <h3>
                            Delivery address
                        </h3>
                    </div>


                    <div className='payment_address'>
                        <p>
                            {user?.email}
                        </p>
                        <p> 123 React alne</p>
                        <p>Los Angles ,USA</p>
                    </div>

                </div>

                <hr></hr>

                {/* review - items */}

                <div className='payment_section'>

                    <div className='payment_title'>
                        <h3>Review items </h3>
                    </div>

                    <div className='payment_items'>
                        {basket.map(items => (
                            <CheckoutProducts
                                id={items.id}
                                title={items.title}
                                price={items.price}
                                rating={items.rating}
                                image={items.image}

                            />
                        ))}
                    </div>

                </div  >

                <hr></hr>

                {/* payment method */}

                <div className='payment_section'>

                    <div className='payment_title'>
                        <h3>Payment method</h3>
                    </div>

                    <div className='payment_details'>
                        {/* stripe magic  */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />


                            <div className='payment_priceContainer'>

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                Order-Total ( {basket.length} items) : <strong>{value}</strong>
                                            </h3>

                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>Processing</p> : "Buy Now"}
                                    </span>
                                </button>

                            </div>

                            {/* error */}

                            {error && <div>{error}</div> }

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Payment  