import React from 'react';
import './Dish.css';
import {formatPrice} from '../../helpers.js'


class Dish extends React.Component {
    
    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }
    
    render(){

        const {image, name, price, desc, status} = this.props.details

        const isAvailable = status === 'available';

        return (
            <li className='menu-dish'>
                
                <img src={image} alt='hi'/>
                
                <h3 className='dish-name'>{name}<br/>
                <span className='price'>{formatPrice(price)}</span>
                </h3>

                <p>{desc}</p>
                
                <button className='addToCart' disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? 'Add to cart' : 'Sold Out'}
                    </button>
            </li>
        )
    }
}

export default Dish