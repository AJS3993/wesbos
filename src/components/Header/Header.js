import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
        return(
            <>
                <header className='top'>
                    <h1>World Famous Bar-B-Que</h1>
                </header>
                <h3 className='tagline'>
                    <span>{this.props.tagline}</span>
                </h3>
            </>
        )
    }
}

export default Header;