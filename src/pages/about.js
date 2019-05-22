import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { isLoggedIn } from "../services/auth"

import Layout from '../components/layout'
import SEO from '../components/seo'

const whyFragmin = (props) => (
  <Layout>
    <SEO title="About FRAGMIN" />
	<div id="page">	
    <div 
      style={{ 
        float: `left`,
        margin: `0 0 10px`,
        width: `100%`,
      }} 
    >
      <div 
        style={{ 
          width: `595px`,
          padding: `0 20px 0 0`,
          float: `left`,
          borderRight: `1px solid #ccc`
        }}      
      >  
        <h1
          style={{ 
            lineHeight: `normal`,
            margin: `0 0 27px`,
          }} 
        >
          About FRAGMIN
        </h1>
        <p>Blood clotting is a normal process of the body to stop excessive bleeding when a blood vessel is injured.</p>
        <h3>How does FRAGMIN work?</h3>
        <p>FRAGMIN is an anticoagulant (blood thinner) called a low molecular weight heparin. It can help keep the blood from forming clots or keep a clot from getting larger.</p>
        <p>FRAGMIN is an injection given just under the skin (a subcutaneous injection).</p>        
      </div>
      <div 
        className="right-block"
        style={{ 
          float: `right`,
          width: 295,
        }} 
      >
        <div 
          style={{ 
            background: `#90cbb2 none repeat scroll 0 0`,
            overflow: `hidden`
          }} 
        >
          <Link
            to="#">
            <Img 
              style={{ 
                width: `143px`,
                float: `left`
              }} 
              fluid={props.data.videoImg.childImageSharp.fluid} 
            />          
            <span
              style={{ 
                width: `136px`,
                float: `left`,
                padding: `24px 8px`,
                fontWeight: `bold`,
                fontSize: `15px`
              }} 
            >FRAGMIN Injection Instruction Video</span>
          </Link>
        </div>
          <Link
            to="#"
            style={{ 
              lineHeight: `18px`,
              margin: `32px 0 0 0`,
              padding: `7px 75px 10px 15px`,
              width: `205px`,
              fontSize: `13px`,
              fontWeight: `bold`,
              background: `#90cbb2`
            }} 
            >
            FRAGMIN Prefilled Syringe with Safety Needle Device Multi-language Injection Instructions
          </Link>
      </div>
    </div>

    <div className="content-bottom">
      <h3>What is FRAGMIN used for?</h3>
      <p>FRAGMIN is used to:</p>
      <ul>
        <li>Treat symptomatic blood clots to prevent recurrence of the clots in patients with cancer</li>
        <li>Treat the acute formation of blood clots in deep veins</li>
        <li>Prevent blood clotting (coagulation) when surgery is performed</li>
        <li>Prevent clotting in those at risk when mobility is restricted during acute illness</li>
      </ul>
      <h3>What are FRAGMIN’s side effects?</h3>
      <p>The most common side effects are pain and bruising at the injection site. The most important side effect of anticoagulation drug therapy is bleeding. It is important that you review the full safety information for FRAGMIN in the Consumer Information leaflet supplied with your medication so that you know when to contact your doctor.</p>
    </div>

	</div>    
  </Layout>
)

export default (props) => {
  if (!isLoggedIn()) {
    // navigate('/');
  }
  return whyFragmin(props);
}

export const fluidImage = graphql`
  fragment aboutFluid on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    videoImg: file(relativePath: { eq: "home-vid-thumb.jpg" }) {
      ...fluidImage
    }    
    clotHead: file(relativePath: { eq: "clot-head-thumb.jpg" }) {
      ...fluidImage
    }
    videoThumb: file(relativePath: { eq: "video_thumb_blood_cloods.jpg" }) {
      ...fluidImage
    }
    deepVeinThrombo: file(relativePath: { eq: "deep_vein_thrombo.jpg" }) {
      ...fluidImage
    }
    pulmonaryEbolism: file(relativePath: { eq: "pulmonary_ebolism.jpg" }) {
      ...fluidImage
    }
  }
`
