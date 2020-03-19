import React from 'react';
import AddFoodForm from '../AddFoodForm/AddFoodForm';
import './Inventory.css';

class Inventory extends React.Component {
    render(){
        return (
            <>
                <h2>Inventory</h2>
                <AddFoodForm addFish={this.props.addFish}/>
            </>
        )
    }
}

export default Inventory