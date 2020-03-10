import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';

class App extends React.Component {
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
          <Inventory />
        </div>
      
      </div>
    )
  }
}

export default App;
