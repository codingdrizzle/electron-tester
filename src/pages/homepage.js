import React from 'react'
import Layout from '../layout'
import Navbar from '../layout/navbar'
import Jumbotron from '../commons/jumbotron'
import Card from '../commons/card'

const Homepage = () => {
  return (
    <Layout>
      <Jumbotron title={'web design'} text='We build websites that serve as powerful marketing tools
        and bring memorable brand experiences.' />
        <Card/>
      <div style={{height: '100vh'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate optio perspiciatis debitis reiciendis quos voluptates quisquam sunt nesciunt quis velit laboriosam, in aliquam numquam veritatis iusto ipsum praesentium iste doloribus.
      </div>
    </Layout>
  )
}

export default Homepage