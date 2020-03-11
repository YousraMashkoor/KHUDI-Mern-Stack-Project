import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css';


const Nav = ()=>{
    return(
        <div className='Container'>   
            <nav>
                <div className='logo'>
                    <h3>KHUDI</h3>
                </div>
                <div  className='Nav-items'>
                    <ul>
                        <li >About Us</li>
                        <li >Browse Skills</li>
                        <li >Log In</li>
                    </ul>
                    <Link to='/login'>
                        <button>Join Us</button>
                    </Link>
                </div>
            </nav>
        </div>

    );
}

export default Nav;