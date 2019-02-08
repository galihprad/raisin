import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactUs from '../components/contactUs'
import Testimoni from '../components/Testimoni'
import LatesProject from '../components/latesProject'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Link to="/page-2/">Go to page 2</Link>
    <LatesProject />
    <Testimoni />
    <ContactUs />
  </Layout>
)

export default IndexPage
