import React from 'react';


class Dish extends React.Component {
    render(){

        const {image, name, price, desc, status} = this.props.details

        const isAvailable = status === 'available';

        return (
            <li className='menu-dish'>
                <img src={image}/>
                <h3 className='dish-name'>{name}
                <span className='price'>{price}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable}>Add to cart</button>
            </li>
        )
    }
}

export default Dish