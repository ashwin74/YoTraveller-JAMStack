import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'

const AboutPage =  () => {
    return (
    <Layout>
        <h1>About Us</h1>
        <p>We make your Travel experiences memorable!</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
        </div>
    </Layout>
    )
}
export default AboutPage;