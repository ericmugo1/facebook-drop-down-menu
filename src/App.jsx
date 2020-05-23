import React from 'react';
import { ReactComponent as BellIcon } from './assets/icons/bell.svg';
import { ReactComponent as MessengerIcon } from './assets/icons/messenger.svg';
import { ReactComponent as CaretIcon } from './assets/icons/caret.svg';
import { ReactComponent as PlusIcon } from './assets/icons/plus.svg';

import NavBar from "./components/navbar/navbar.component";
import NavItem from "./components/nav-item/nav-item.component";
import DropdownMenu from "./components/dropdown-menu/dropdown-menu.component";

import './App.styles.css';

function App() {
  return (
    <NavBar>
      <NavItem icon={ <PlusIcon /> } />
      <NavItem icon={ <BellIcon /> } />
      <NavItem icon={ <MessengerIcon /> } />
      <NavItem icon={ <CaretIcon /> }>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </NavBar>
  );
}

export default App;
