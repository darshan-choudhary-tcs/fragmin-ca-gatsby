import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { isLoggedIn } from "../services/auth"

import Layout from '../components/layout'
import SEO from '../components/seo'

const whyFragmin = (props) => (
  <Layout>
    <SEO title="The reason I have been prescribed FRAGMIN…" />
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
        style={{ 
          width: `595px`,
          padding: `0 20px 0 0`,
          float: `left`,
          borderRight: `1px solid #ccc`
        }}      
      >
        <div
          style={{ 
            margin: `0 10px 10px 30px`,
            float: `right`,
          }}       
        >
            <Img 
              style={{ 
                width: `190px`,
              }} 
              fluid={props.data.prescribedFragmin.childImageSharp.fluid} 
            />

        </div>    
        <h1
          style={{ 
            lineHeight: `normal`,
            margin: `0 0 27px`,
          }} 
        >
          Why I take FRAGMIN
        </h1>
        <p>Click on the box below which best describes you.</p>
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
          >I am a patient <br/> with cancer and <br/> I have a symptomatic <br/> blood clot</h3>
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
          >I have a blood clot <br />in a deep vein</h3>
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
          >I have had surgery</h3>
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
          >My ability to move <br/>around has been <br/>restricted due to an <br/>acute illness</h3>
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
  return whyFragmin(props);
}

export const fluidImage = graphql`
  fragment whyFragminFluid on File {
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
    womanHeadscarf: file(relativePath: { eq: "woman_with_headscarf-diningroom_Small.jpg" }) {
      ...fluidImage
    }
    bloodClotVein: file(relativePath: { eq: "blood-clot-vein.jpg" }) {
      ...fluidImage
    }
    surgery: file(relativePath: { eq: "surgery.jpg" }) {
      ...fluidImage
    }
    abilityToMove: file(relativePath: { eq: "new-ability_to_move_image-original_500_319.png" }) {
      ...fluidImage
    }
    orangeArrow: file(relativePath: { eq: "orange-arrow.png" }) {
      ...fluidImage
    }
  }
`
