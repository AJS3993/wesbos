import React from 'react';
import AddFoodForm from '../AddFoodForm/AddFoodForm';
import EditFoodForm from '../EditFoodForm/EditFoodForm';
import './Inventory.css';

class Inventory extends React.Component {
    render(){
        return (
            <>
                <h2>Inventory</h2>
                {Object.keys(this.props.food).map(key => (
                <EditFoodForm
                    key={key}
                    index={key}
                    food={this.props.food[key]}
                    updateFood={this.props.updateFish}
                />
                ))}
                
                <AddFoodForm addFood={this.props.addFood}/>
                <button onClick={this.props.loadSamples}>Load Samples</button>
            </>
        )
    }
}

export default Inventory