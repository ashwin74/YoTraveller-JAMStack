import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'



const IndexPage = () => (
  <Layout>
    <h1>Hey Travellers! Welcome to Travel Saga</h1>
    <p>Create your amazing album of Travel Experiences, Pictures and even information in one place.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/create-album"><p style={{backgroundColor:'black', borderRadius:'10px', padding:'10px', color:'white', textAlign:'center'}}>Create Your Album</p></Link>
  </Layout>
)

export default IndexPage
