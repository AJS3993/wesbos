import React from 'react';
import './Header.css';

const Header = props => (

        
            <>
                <header className='top'>
                    <h1>Joe's World Famous Bar-B-Que</h1>
                </header>
                <h3 className='tagline'>
                    <span>-{props.tagline}-</span>
                </h3>
            </>
        )
    

export default Header;