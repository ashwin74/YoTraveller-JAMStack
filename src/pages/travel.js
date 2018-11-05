import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'

const TravelPage =  () => {
    return (
    <Layout>
        <h1>Travel Saga</h1>
        <p>Look those amazing Travel Experiences!</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
        </div>
    </Layout>
    )
}
export default TravelPage;