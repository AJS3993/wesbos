import React from 'react';
import './AddFoodForm.css';

class AddFoodForm extends React.Component {
    
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFood = e => {
        e.preventDefault();
        
        const food = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
    
        this.props.addFood(food);
        //reset form
        e.currentTarget.reset();
    };

  
    
    render(){
        return (
            <form className='foodEdit' onSubmit={this.createFood}>
                
                <input name='name' ref={this.nameRef} type='text' placeholder='name'/>
                <input name='price' ref={this.priceRef} type='text' placeholder='price'/>
                
                <select name='status' ref={this.statusRef} type='text' placeholder='status'>
                    <option value='available'>Fresh!</option>
                    <option value='available'>Sold Out</option>
                </select>
                
                <textarea name='desc' ref={this.descRef} type='text' placeholder='desc'/>
                <input name='image' ref={this.imageRef} type='text' placeholder='image'/>
                <button type='submit'>Add</button>
            
            </form>
        )
    }
}

export default AddFoodForm