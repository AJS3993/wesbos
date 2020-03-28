import React from 'react';
import './Order.css';

class Order extends React.Component {
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
                <ul>
                    <li>{orderIds}</li>
                </ul>
                <div className='total'>
                    {total}
                </div>
            </div>
        )
    }
}

export default Order