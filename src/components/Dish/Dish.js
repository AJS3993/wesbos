import React from 'react';


class Dish extends React.Component {
    render(){
        return (
            <li className='menu-dish'>
                <img src={this.props.details.image}/>
            </li>
        )
    }
}

export default Dish