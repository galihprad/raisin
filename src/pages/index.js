import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactUs from '../components/contactUs'
import Testimoni from '../components/Testimoni'
import LatesProject from '../components/latesProject'
import Landing from '../components/Landing'
import StoryService from '../components/StoryService'

import 'animate.css/animate.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Landing />
    <StoryService />
    <LatesProject />
    <Testimoni />
    <ContactUs />
  </Layout>
)

export default IndexPage
