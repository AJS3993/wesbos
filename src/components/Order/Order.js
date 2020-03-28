import React from 'react';
import './Order.css';

class Order extends React.Component {
    render(){

        const orderIds = Object.keys(this.props.order)

        return (
            <div className='order-wrap'>
                <h2>Order</h2>
                <ul>
                    <li>{orderIds}</li>
                </ul>
            </div>
        )
    }
}

export default Order