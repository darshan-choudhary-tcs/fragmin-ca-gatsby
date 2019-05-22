import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { isLoggedIn } from "../services/auth"

import Layout from '../components/layout'
import SEO from '../components/seo'

const homePage = (props) => (
  <Layout>
    <SEO title="Homepage" />
	<div id="page">	
    <div 
      style={{ 
        borderBottom: `1px solid #ccc`,
        float: `left`,
        margin: `0 0 36px`,
        padding: `0 0 36px`,
        width: `100%`,
      }} 
    >
      <div 
        className="left-block"
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
          Welcome to FRAGMIN.ca!
        </h1>
        <p>You have been prescribed FRAGMIN because your doctor is concerned about blood clots.</p>
        <p className="lastp">Explore this site to review how and why blood clots form, better understand the reason YOU have been prescribed FRAGMIN, review how to inject FRAGMIN and get some practical information.</p>
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
      <div 
        style={{ 
          display: `inline-block`,
          marginRight: `3.2%`,
          width: `204px`,
          border: `4px solid #e5eaea`,
          textAlign: `center`,
          position: `relative`,
          padding: `0 0 50px 0`,
          verticalAlign: `top`,
          minHeight: `240px`,
        }}
      >
        <Link
          to="#"
          style={{ 
            textDecoration: `none`,
          }}
          >
          <div className="callout-img-wrapper">
            <Img 
              fluid={props.data.womanHeadscarf.childImageSharp.fluid} 
            />
          </div>
          <h3
            style={{ 
              margin: `10px auto`,
              width: `82%`,
              lineHeight: `normal`,
              fontSize: `18px`,
              color: `#005138`
            }}
          >What is a blood clot?</h3>
          <div className="go-btn">
            <Img 
              style={{ 
                width: 44,
                margin: `0 auto`
              }} 
              fluid={props.data.orangeArrow.childImageSharp.fluid} 
            />
          </div>
        </Link> 
      </div>

      <div 
        style={{ 
          display: `inline-block`,
          marginRight: `3.2%`,
          width: `204px`,
          border: `4px solid #e5eaea`,
          textAlign: `center`,
          position: `relative`,
          padding: `0 0 50px 0`,
          verticalAlign: `top`,
          minHeight: `240px`,
        }}
      >
        <Link
          to="#"
          style={{ 
            textDecoration: `none`,
          }}
          >
          <div className="callout-img-wrapper">
            <Img 
              fluid={props.data.bloodClotVein.childImageSharp.fluid} 
            />                
          </div>
          <h3
            style={{ 
              margin: `10px auto`,
              width: `82%`,
              lineHeight: `normal`,
              fontSize: `18px`,
              color: `#005138`
            }}
          >Why I take FRAGMIN</h3>
          <div className="go-btn">
            <Img 
              style={{ 
                width: 44,
                margin: `0 auto`
              }} 
              fluid={props.data.orangeArrow.childImageSharp.fluid} 
            />
          </div>
        </Link>
      </div>
      <div 
        style={{ 
          display: `inline-block`,
          marginRight: `3.2%`,
          width: `204px`,
          border: `4px solid #e5eaea`,
          textAlign: `center`,
          position: `relative`,
          padding: `0 0 50px 0`,
          verticalAlign: `top`,
          minHeight: `240px`,
        }}
      >
        <Link
          to="#"
          style={{ 
            textDecoration: `none`,
          }}
          >
          <div className="callout-img-wrapper">
            <Img 
              fluid={props.data.surgery.childImageSharp.fluid} 
            />  
          </div>
          <h3
            style={{ 
              margin: `10px auto`,
              width: `82%`,
              lineHeight: `normal`,
              fontSize: `18px`,
              color: `#005138`
            }}
          >Injecting FRAGMIN</h3>
          <div className="go-btn">
            <Img 
              style={{ 
                width: 44,
                margin: `0 auto`
              }} 
              fluid={props.data.orangeArrow.childImageSharp.fluid} 
            />
          </div>
        </Link>
      </div>
      <div 
        style={{ 
          display: `inline-block`,
          margin: 0,
          width: `204px`,
          border: `4px solid #e5eaea`,
          textAlign: `center`,
          position: `relative`,
          padding: `0 0 50px 0`,
          verticalAlign: `top`,
          minHeight: `240px`,
        }}
      >
        <Link
          to="#"
          style={{ 
            textDecoration: `none`,
          }}
          >
          <div className="callout-img-wrapper">
            <Img 
              fluid={props.data.abilityToMove.childImageSharp.fluid} 
            />                  
          </div>
          <h3
            style={{ 
              margin: `10px auto`,
              width: `82%`,
              lineHeight: `normal`,
              fontSize: `18px`,
              color: `#005138`
            }}
          >Patient Resources</h3>
          <div className="go-btn">
            <Img 
              style={{ 
                width: 44,
                margin: `0 auto`
              }} 
              fluid={props.data.orangeArrow.childImageSharp.fluid} 
            />
          </div>
        </Link>
      </div>
    </div>    

	</div>    
  </Layout>
)

export default (props) => {
  if (!isLoggedIn()) {
    // navigate('/')
  }
  return homePage(props);
}

export const fluidImage = graphql`
  fragment fluidImage on File {
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
    prescribedFragmin: file(relativePath: { eq: "prescribed-fragmin-thumb-rounded.png" }) {
      ...fluidImage
    }
    womanHeadscarf: file(relativePath: { eq: "what-is-blood-clot-thumb.jpg" }) {
      ...fluidImage
    }
    bloodClotVein: file(relativePath: { eq: "prescribed-fragmin-thumb.jpg" }) {
      ...fluidImage
    }
    surgery: file(relativePath: { eq: "injecting-fragmin-thumb.jpg" }) {
      ...fluidImage
    }
    abilityToMove: file(relativePath: { eq: "patient-resources-thumb.jpg" }) {
      ...fluidImage
    }
    orangeArrow: file(relativePath: { eq: "orange-arrow.png" }) {
      ...fluidImage
    }    
  }
`
