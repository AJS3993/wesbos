import React from 'react';
import './StorePicker.css';

class StorePicker extends React.Component {
    

    myInput = React.createRef()

   
    goToStore = event => {
        
        //1. stop form from submitting
        event.preventDefault();

        //2. get text from input
        console.log(this.myInput.value.value)

        //3.change page to /store/whatever-they-entered
        this.props.push(`/store/${this.myInput}`)

    }
    


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