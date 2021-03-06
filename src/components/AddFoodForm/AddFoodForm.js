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
                
                <div className='RowA'>
                <input className='AddName' name='name' ref={this.nameRef} type='text' placeholder='name'/>
                <input className='AddPrice' name='price' ref={this.priceRef} type='text' placeholder='price in cents'/>
                </div>
                
                <div className='Availability'>
                <p>Currently Available?</p>
                <select name='status' ref={this.statusRef} type='text' placeholder='status'>
                    <option value='available'>Yes</option>
                    <option value='unavailable'>No</option>
                </select>
                </div>
                <textarea name='desc' ref={this.descRef} type='text' placeholder='desc'/>
                <input name='image' className='inputImage' ref={this.imageRef} type='text' placeholder='image'/>
                <button type='submit'>Add</button>
            
            </form>
        )
    }
}

export default AddFoodForm