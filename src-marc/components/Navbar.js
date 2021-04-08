import React from 'react';
import '../CSS/Navbar.css';
// import SelectTeam from './SelectTeam';

const Navbar = () => {

return (
    <nav>
        <span> Football 11 - Lineup builder </span>
        <span className='navItems'>Real Teams</span>
        <span className='navItems'> Your Team</span>
        <button id='login'> Login</button>
    </nav>
)

}

export default Navbar;