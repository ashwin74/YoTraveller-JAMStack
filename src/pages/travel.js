import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'

const TravelPage =  () => {
    return (
    <Layout>
        <h1>Create Your Travel Story</h1>
        <p>We are excited to have you here creating an amazing Travel Story of Yours! Go On</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
        </div>
    </Layout>
    )
}
export default TravelPage;