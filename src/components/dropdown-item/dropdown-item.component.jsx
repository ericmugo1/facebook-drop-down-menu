import React from "react";
import './dropdown-item.styles.css'

const dropdownItem = props => {
    return (
        <a href="#" className="menu-item" >
            <span className="icon-button">{ props.leftIcon }</span>
            { props.children }
            <span className="icon-right">{ props.rightIcon }</span>
        </a>
    );
}

export default dropdownItem;