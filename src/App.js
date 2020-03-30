import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import dishes from './sample-food';
import Dish from './components/Dish/Dish';
import base from './base';


class App extends React.Component {
  
  state = {
    food: {},
    order: {}
  }

  componentDidMount() {
    const { params } = this.props.match;
    
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    
    this.ref = base.syncState(`${params.storeId}/food`, {
      context: this,
      state: "food"
    });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFood = dish => {
    //1. Take a copy of the existing state in a variable
    const food = {...this.state.food}

    //2. Add new food to that variable
    food[`dish${Date.now()}`] = dish

    //3. Set new food object to state
    this.setState({food: food})
  }

  loadSamples = () => {
    this.setState({food: dishes});
  }

  addToOrder = key => {
    //1.take a copy of state
    const order = {...this.state.order};
    //2.add to order or update order number
    order[key] = order[key] + 1 || 1;
    //3.call setState to update state
    this.setState({order});
  }
  
  render(){
    return (
      
      <div className="App">
        
        <div className='menu'>
          <Header tagline='Mouth Watering'/>
          <ul className='dishes'>
            {Object.keys(this.state.food).map(key => 
            <Dish key={key}
            index={key} 
            details={this.state.food[key]} 
            addToOrder={this.addToOrder}
            /> )}
          </ul>
        </div>
        
        <div className='Order'>
          <Order food={this.state.food} order={this.state.order}/>
        </div>
        
        <div className='Inventory'>
          <Inventory addFood={this.addFood} loadSamples={this.loadSamples} food={this.state.food}/>
        </div>
      
      </div>
    )
  }
}

export default App;
