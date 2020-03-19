import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';

class App extends React.Component {
  
  state = {
    food: {},
    order: {}
  }

  addFood = (fish) => {
    console.log('addFood')
  }
  
  render(){
    return (
      
      <div className="App">
        
        <div className='menu'>
          <Header tagline='Mouth Watering'/>
        </div>
        
        <div className='Order'>
          <Order />
        </div>
        
        <div className='Inventory'>
          <Inventory addFood={this.addFood}/>
        </div>
      
      </div>
    )
  }
}

export default App;
