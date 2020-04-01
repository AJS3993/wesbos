import React from 'react';

class EditFoodForm extends React.Component {
    render(){
        return (
            <div className='EditFood'>
                <input type='text' name='name'/>
                <input type='text' name='price'/>
                <select type='text' name='status'>
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Sold Out</option>
                </select>
                <input type='text' name='desc'/>
                <input type='text' name='image'/>
            </div>
        )
    }
}

export default EditFoodForm;