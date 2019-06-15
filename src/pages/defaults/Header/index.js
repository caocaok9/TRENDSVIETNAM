import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="app-header">
                <HeaderTop/>
                <HeaderLogo/>
                <HeaderMenu/>
            </div>
        )
    }
}
export default Header;