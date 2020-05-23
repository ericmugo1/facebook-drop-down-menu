import React from "react";
import './dropdown-item.styles.css'

const DropdownItem = props => {
    const { goToMenu,leftIcon,rightIcon,onChange } = props;

    return (
        <a href="#" className="menu-item" onClick={ () => goToMenu && onChange(goToMenu) }>
            <span className="icon-button">{ leftIcon }</span>
            { props.children }
            <span className="icon-right">{ rightIcon }</span>
        </a>
    );
}

export default DropdownItem;