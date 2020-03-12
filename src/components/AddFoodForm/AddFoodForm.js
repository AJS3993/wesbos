import React from 'react';
import './AddFoodForm.css';

class AddFoodForm extends React.Component {
    render(){
        return (
            <form className='foodEdit'>
                <input name='name' type='text' placeholder='name'/>
                <input name='price' type='text' placeholder='price'/>
                <select name='status' type='text' placeholder='status'/>
                <textarea name='desc' type='text' placeholder='desc'/>
                <input name='image' type='text' placeholder='image'/>
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default AddFoodForm