import React from "react"

import Logo from "../components/logo"
import SEO from "../components/seo"
import DinForm from '../components/dinform';
import Footer from "../components/footer";

const IndexPage = () => (
  <div>
    <SEO title="Homepage" keywords={[]} />
    <div id="site_strip"></div>
    <div id="page" 
      style={{
        width:940,
        margin: `0 auto`
      }}
    >
      <div id="header" className="front">
        <div 
          style={{
            maxWidth: `300px`, 
            margin: `80px auto 50px`
          }}
        >
          <Logo />
        </div>
      </div>
      <DinForm />
      <Footer />
    </div>  
  </div>
)

export default IndexPage
