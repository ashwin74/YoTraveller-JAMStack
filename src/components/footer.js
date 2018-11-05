import React from 'react'
import { Link } from 'gatsby';

const Footer = () => (
    <div style={{textAlign: 'center', backgroundColor: 'grey', color: 'white', paddingTop: '20px'}}>
      <p>Designed and Coded with ❤️ by <Link style={{color:'white'}} to="https://in.linkedin.com/ashwin74">Ashwin</Link></p>
      <p>&trade;Ashwin 2018</p>
    </div>
  )
export default Footer;