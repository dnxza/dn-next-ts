import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | DNRatthee">
    <h1>About</h1>
    <p>Ratthee Jar.</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage