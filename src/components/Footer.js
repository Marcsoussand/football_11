import React from 'react';
import '../CSS/Footer.css';

//Footer component with GitHub, LinkedIn, Facebook and mail contact

const Footer = () => {

    return (
        <footer>
            <span className='footerContent'> Football 11 - Lineup builder </span>
            <a style={{ color: 'green' }} className='footerContent' href="https://github.com/Marcsoussand/football_11"><i className="fab fa-github"></i></a>
            <a style={{ color: 'green' }} className='footerContent' href="https://www.linkedin.com/in/marc-soussand/"><i className="fab fa-linkedin-in"></i></a>
            <a style={{ color: 'green' }} className='footerContent' href="https://www.facebook.com/marc.soussand"><i className="fab fa-facebook"></i></a>
            <span className='footerContent' >marc.soussand@gmail.com</span>
        </footer>
    )

}

export default Footer;