import React from 'react';
import './StorePicker.css';

class StorePicker extends React.Component {
    

    myInput = React.createRef()

   
    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
      };
    


    render(){
        return (
            <>
                <form className='formy' onSubmit={this.goToStore}>
                  
                  <h2>Enter a store</h2>
                  
                  <input type='text' ref={this.myInput} required placeholder='store name'></input>
                  
                  <button type='submit'>Visit Store</button>
                
                </form>
            </>
        )
    }
}

export default StorePicker;