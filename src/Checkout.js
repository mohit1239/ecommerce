import React from 'react'
import "./Checkout.css"
function Checkout() {
    return (

        <div className="checkout">
            <div className="checkout_left">
                  <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/SalDaysOct/Slary_days_1500x300.jpg" />
            <div>
                <h2 className="checkout_title">
                    Your shopping basket
                </h2>

            </div>
            
            </div>
            <div className="checkout_right">
                <Subtotal/>
                <h2>the subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout

