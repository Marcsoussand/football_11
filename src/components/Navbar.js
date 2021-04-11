import React from 'react';
import '../CSS/Navbar.css';
import logo from '../Images/logo.PNG';
import { NavLink } from 'react-router-dom';

// Navbar to navigate with NavLinks
// After token, name of the user appears on the right
const Navbar = (props) => {
    const { realTeams, yourTeam, about, login, token } = props;

    if (!token) {
        return (
            <nav>
                <div id='title'><NavLink to='/'><img src={logo} alt='Logo'></img><div><p id='titleUp'>Football 11</p><p id='titleDown'>Lineup builder</p></div></NavLink></div>
                <div id='items'>
                    <span className='navItems' onClick={realTeams} ><NavLink to='/realTeams'>Real Teams</NavLink></span>
                    <span className='navItems' onClick={yourTeam}><NavLink to='/yourTeam'>Your Team</NavLink> </span>
                    <span className='navItems' onClick={about}><NavLink to='/about'>About</NavLink></span>
                    <span className='navItems' id='login' onClick={login}> <NavLink to='/login'>Login</NavLink><i className="fas fa-sign-in-alt"></i></span>
                </div>
            </nav>
        )
    }
    return (
        <nav>
            <div id='title'><NavLink to='/'><img src={logo} alt='Logo'></img><div><p id='titleUp'>Football 11</p><p id='titleDown'>Lineup builder</p></div></NavLink></div>
            <div id='items'>
                <span className='navItems' onClick={realTeams} ><NavLink to='/realTeams'>Real Teams</NavLink></span>
                <span className='navItems' onClick={yourTeam}><NavLink to='/yourTeam'>Your Team</NavLink> </span>
                <span className='navItems' onClick={about}><NavLink to='/about'>About</NavLink></span>
                <span className='navItems' id='welcome'>Hi {JSON.parse(token).username}</span>
            </div>
        </nav>)
}


export default Navbar;