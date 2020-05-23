import React from "react";
import './navbar.styles.css'

const navBar = props => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                { props.children }

            </ul>
        </nav>
    );
}

export default navBar