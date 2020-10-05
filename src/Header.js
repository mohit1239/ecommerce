import React from 'react'
import './Header.css'
import SearchIcon from"@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {Link} from "react-router-dom"
function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className="header_logo"
            src="data:image/png;base64,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"/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchicon"/></div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionlineone">Hello Guest </span>
                    <span className="header_optionlinetwo">Sign in</span>
                </div>
                <div className="header_option">
                    <span className="header_optionlineone">Returns </span>
                    <span className="header_optionlinetwo">&Orders</span>

                </div>
                <div className="header_option">
                    <span className="header_optionlineone"> Your</span>
                    <span className="header_optionlinetwo"> Prime</span>

                </div>
                <Link to="/checkout">
                <div className="header_optionbasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionlinetwo header_basketcount">0</span> 
                </div>

                </Link>
                

            </div>
        </div >
    )
}

export default Header
