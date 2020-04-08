import React from 'react';
import './Order.css';
import {formatPrice} from '../../helpers.js';

// import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
    renderOrder = key => {
        const dish = this.props.food[key];
        const count = this.props.order[key];
        const isAvailable = dish && dish.status === 'available';
        
        if (!dish) return null;
        
        if(!isAvailable) { return (
            <li key={key}>Sorry, this item is no longer available</li>
         ) }
        return( <li key={key}>
            {count} {dish.name}
            {formatPrice(count * dish.price)}
            <button className='Xbutton' onClick={() => this.props.removeFromOrder(key)}>X</button>
        </li>
        )
    }
    
    render(){

        const orderIds = Object.keys(this.props.order);

        const total = orderIds.reduce((prevTotal, key) => {
            const dish = this.props.food[key];
            const count = this.props.order[key];
            const isAvailable = dish && dish.status === 'available';
            if(isAvailable){
                return prevTotal + (count * dish.price)
            }
            return prevTotal
        }, 0);

        return (
            <div className='order-wrap'>
                <h2>Order</h2>
                <ul className='order'>
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className='total'>
                    Total: <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order