import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import {useStateValue} from"./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
function Checkout() {
    const[{basket},dispatch]=useStateValue()
    return (

        <div className="checkout">
            <div className="checkout_left">
                  <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/SalDaysOct/Slary_days_1500x300.jpg" />
            <div>
                <h2 className="checkout_title">
                    Your shopping basket
                </h2>
                   {basket.map(item=>(
                    <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       rating={item.rating}                       
                       price={item.price}
                 />
                   ))}   

            </div>
            
            </div>
            <div className="checkout_right">
                <Subtotal/>
                <h2></h2>
            </div>
        </div>
    )
}

export default Checkout

