import React from 'react';

class StorePicker extends React.Component {
    
    render(){
        return (
            <>
                <form className='formy'>
                  <h2>Enter a store</h2>
                  <input type='text' required placeholder='store name'></input>
                  <button type='submit'>Visit Store</button>
                </form>
            </>
        )
    }
}

export default StorePicker;