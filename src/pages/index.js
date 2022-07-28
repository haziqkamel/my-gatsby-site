import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following Gatsby tutorial</p>
      <StaticImage
        src="../images/icon.png"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      />
    </Layout>
  )
}
export default IndexPage
