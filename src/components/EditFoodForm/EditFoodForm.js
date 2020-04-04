import React from 'react';
import './EditFoodForm.css'

class EditFoodForm extends React.Component {
    
    handleChange = event => {
        console.log(event.currentTarget.value);
        // update that food
        // 1. Take a copy of the current food
        const updatedFood = {
          ...this.props.food,
          [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFood(this.props.index, updatedFood);
      };
    
    render(){
        return (
            <div className='EditFood'>
                <input type='text' name='name' onChange={this.handleChange} value={this.props.food.name}/>
                <input type='text' name='price' onChange={this.handleChange} value={this.props.food.price}/>
                <select type='text' name='status' onChange={this.handleChange} value={this.props.food.status}>
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Sold Out</option>
                </select>
                <input type='text' name='desc' onChange={this.handleChange} value={this.props.food.desc}/>
                <input type='text' name='image' onChange={this.handleChange} value={this.props.food.image}/>
                <button onClick={() => this.props.deleteFood(this.props.index)}>
                Remove
                </button>
            </div>
        )
    }
}

export default EditFoodForm;