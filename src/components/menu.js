import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
        <div style={{background: 'orange', paddingTop: '10px'}}>
            <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
                <li><Link to='/travel'>View Travels</Link></li>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/create-album'>Create Album</Link></li>
                <li><Link to='/about'>About Us</Link></li>
            </ul>
        </div>
    )
export default Menu;