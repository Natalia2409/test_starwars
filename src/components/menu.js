import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to='/people'>People</Link>
                </li>
                <li>
                    <Link className='planets' to='/planets'>Planets</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;