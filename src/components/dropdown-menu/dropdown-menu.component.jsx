import React from "react";
import './dropdown-menu.styles.css'

import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';

import DropdownItem from "../dropdown-item/dropdown-item.component";

const dropdownMenu = () => {
    return (
        <div className='dropdown'>
            <DropdownItem> My Profile</DropdownItem>
            <DropdownItem
                leftIcon={ <CogIcon /> }
                rightIcon={ <ChevronIcon /> }> </DropdownItem>
        </div>
    );
}
export default dropdownMenu;