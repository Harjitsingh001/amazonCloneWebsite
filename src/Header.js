import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStateValue } from "./SttateProvider"
function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/"><img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
            </Link>

            <div className="header__search">
                <input style={{ width: 1061 }}
                    className='header__searchInput" type="text' />
                {/* <FontAwesomeIcon cla    ssName='header__searchIcon' icon={faSearch} /> */}
            </div>
            <FontAwesomeIcon className='header__searchIcon' icon={faSearch} />

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionOne'>Hello honey</span>
                    <span className='header__optionTwo'>Sign in</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionOne'>Returns</span>
                    <span className='header__optionTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionOne'>Your</span>
                    <span className='header__optionTwo'>Prime</span>
                </div>

            </div>
            <Link to="/checkout"> <div className='header__shopingIcon'>
                <FontAwesomeIcon className='header__shopingIcon' icon={faShoppingBag} />
                <span className='header__cartItems'>{basket?.length}</span>
            </div></Link>
 

        </div>

    )
}

export default Header