import React,{ useState } from "react";
import { CSSTransition } from "react-transition-group";
import './dropdown-menu.styles.css'

import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../assets/icons/bolt.svg';

import DropdownItem from "../dropdown-item/dropdown-item.component";

const DropdownMenu = () => {
    const [activeMenu,setActiveMenu] = useState('main');
    const [menuHeight,setMenuHeight] = useState('null');

    const calcHeight = el => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <div className='dropdown' style={ { height: menuHeight } } >
            <CSSTransition
                in={ activeMenu === 'main' }
                timeout={ 500 }
                classNames="menu-primary"
                unmountOnExit
                onEnter={ calcHeight }>

                <div className='menu'>
                    <DropdownItem
                        leftIcon='👤'
                    > My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={ <CogIcon /> }
                        rightIcon={ <ChevronIcon /> }
                        goToMenu="settings"
                        onChange={ setActiveMenu }>
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon='🐧'
                        rightIcon={ <ChevronIcon /> }
                        goToMenu="animals"
                        onChange={ setActiveMenu }>
                        Animals
                      </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={ activeMenu === 'settings' }
                timeout={ 500 }
                classNames="menu-secondary"
                unmountOnExit
                onEnter={ calcHeight }>

                <div className="menu">
                    <DropdownItem goToMenu="main"
                        leftIcon={ <ArrowIcon /> }
                        onChange={ setActiveMenu }>
                        <h2>Main Menu</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={ <BoltIcon /> }>HTML</DropdownItem>
                    <DropdownItem leftIcon={ <BoltIcon /> }>CSS</DropdownItem>
                    <DropdownItem leftIcon={ <BoltIcon /> }>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={ <BoltIcon /> }>Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ activeMenu === 'animals' }
                timeout={ 500 }
                classNames="menu-secondary"
                unmountOnExit
                onEnter={ calcHeight }>

                <div className="menu">
                    <DropdownItem
                        goToMenu="main"
                        leftIcon={ <ArrowIcon /> }
                        onChange={ setActiveMenu }>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Butterfly</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>

        </div >
    );
}
export default DropdownMenu;