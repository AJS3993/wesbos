import React from 'react';
import './EditFoodForm.css'

class EditFoodForm extends React.Component {
    render(){
        return (
            <div className='EditFood'>
                <input type='text' name='name' value={this.props.food.name}/>
                <input type='text' name='price' value={this.props.food.price}/>
                <select type='text' name='status' value={this.props.food.status}>
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Sold Out</option>
                </select>
                <input type='text' name='desc' value={this.props.food.desc}/>
                <input type='text' name='image' value={this.props.food.image}/>
            </div>
        )
    }
}

export default EditFoodForm;