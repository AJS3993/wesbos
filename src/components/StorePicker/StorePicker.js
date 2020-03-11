import React from 'react';
import './StorePicker.css';

class StorePicker extends React.Component {

    handleClick(){
        alert('heyyyyyyyyyy')
    }
    
    render(){
        return (
            <>
                <form className='formy'>
                  
                  <h2>Enter a store</h2>

                  <button onClick={this.handleClick}>THE BUTTON :0</button>
                  
                  <input type='text' required placeholder='store name'></input>
                  
                  <button type='submit'>Visit Store</button>
                
                </form>
            </>
        )
    }
}

export default StorePicker;