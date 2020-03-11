import React from 'react';
import './StorePicker.css';

class StorePicker extends React.Component {

    goToStore(event) {
        
        //1. stop form from submitting
        event.preventDefault();

        //2. get text from input


        //3.change page to /store/whatever-they-entered

    }
    
    render(){
        return (
            <>
                <form className='formy' onSubmit={this.goToStore}>
                  
                  <h2>Enter a store</h2>
                  
                  <input type='text' required placeholder='store name'></input>
                  
                  <button type='submit'>Visit Store</button>
                
                </form>
            </>
        )
    }
}

export default StorePicker;