import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './SttateProvider'
import { getBasketTotal } from './Reducer'
import {useNavigate} from "react-router-dom";


function Subtotal() {
  const navigate =useNavigate();  
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}items): <strong>{value}</strong>
            </p>
            <small className='Subtotal__gift'>
              <input  className =" subb"type="checkbox" />This order contains a gift
            </small>
            <button className =" subb"onClick={e => navigate('/payment')}>proseed to checkout</button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

      />
    </div>
  )
}

export default Subtotal