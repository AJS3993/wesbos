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
                
                <div className='Row1'>
                <input className='EditName' type='text' name='name' onChange={this.handleChange} value={this.props.food.name}/>
                <input className='EditPrice' type='text' name='price' onChange={this.handleChange} value={this.props.food.price}/>
                </div>

                <div className='Availability'>
                <p>Currently Available?</p>
                

                <select type='text' name='status' onChange={this.handleChange} value={this.props.food.status}>
                    <option value='available'>Yes</option>
                    <option value='unavailable'>No</option>
                </select>
              
                </div>
                
                <textarea name='desc' onChange={this.handleChange} value={this.props.food.desc}/>
                <input type='text' name='image' className='inputImage' onChange={this.handleChange} value={this.props.food.image}/>
                <button onClick={() => this.props.deleteFood(this.props.index)}>
                Remove
                </button>
            </div>
        )
    }
}

export default EditFoodForm;