import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { isLoggedIn } from "../services/auth"

import Layout from '../components/layout'
import SEO from '../components/seo'

const whyFragmin = (props) => (
  <Layout>
    <SEO title="What is a blood clot" />
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
              fluid={props.data.clotHead.childImageSharp.fluid} 
            />

        </div>    
        <h1
          style={{ 
            lineHeight: `normal`,
            margin: `0 0 27px`,
          }} 
        >
          What is a blood clot?
        </h1>
        <p>Blood clotting is a normal process of the body to stop excessive bleeding when a blood vessel is injured.</p>
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
        className="top-part"
        style={{ 
          borderBottom: `1px solid #ccc`,
          padding: `0 0 20px`,
          margin: `0 0 35px`,
          width: `100%`,
          overflow: `hidden`,
        }} 
      >
        <div 
          style={{ 
            width: `31%`,
            float: `left`,
          }} 
        >
          <Link
            to="#">
            <Img
              style={{ 
                border: `none`,
                display: `block`,
                width: `100%`,
              }}               
              fluid={props.data.videoThumb.childImageSharp.fluid} 
            /> 
          </Link>
          <p
            style={{
              fontSize: `10px`,
              margin: `3px 0 0`,
              textStyle: `italic`,
            }}
          >Click here to watch a short video on the formation<br /> of blood clots</p>            
        </div>
        <div 
          style={{ 
            marginLeft: `3%`,
            width: `66%`,
            float: `left`,
          }} 
        >
          <h3
            style={{ 
              margin: 0,
            }} 
          >When can blood clotting be a problem?</h3>
          <p>Sometimes blood clots form abnormally within a blood vessel. In some cases the clot becomes large enough to block the blood flow.</p>
          <p>The medical term for development of an abnormal blood clot is <span className="italic-font">thrombosis</span>.</p>
          <p>Sometimes all or part of a blood clot breaks off and travels to other parts of the body. This is called an <span className="italic-font">embolism</span>.</p>
          <p>Read further to understand more about thrombosis and embolism, and who is at risk.</p>
        </div>
      </div>
      <div
        style={{
          width: `48.5%`,
          marginRight: `3%`,
          float: `left`,
        }}
      >
        <div>
          <Img 
            fluid={props.data.deepVeinThrombo.childImageSharp.fluid} 
          />
        </div>
        <div>
          <h2>Deep Vein Thrombosis</h2>
          <div>
            <h3>What is a deep vein thrombosis?</h3>
            <ul>
              <li>A deep vein thrombosis or <span className="italic-font">DVT</span> is a blood clot that forms in a deep vein</li>
              <li>DVT mostly occurs in the deep veins of the legs, but can also occur in other parts of the body such as the veins of the arms or the abdomen</li>
            </ul>
          </div>
          <div>
            <h3>What are the symptoms of DVT?</h3>
            <p>Not everyone with DVT will experience symptoms. When symptoms are present they may include:</p>
            <ul>
              <li>Swelling of the leg or arm (sometimes it occurs suddenly)</li>
              <li>Pain or tenderness in the leg that may only be felt when standing or walking</li>
              <li>Feeling of increased warmth in the area of the leg or arm that is swollen or that hurts</li>
              <li>Redness or discolouration of the skin</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          width: `48.5%`,
          margin: 0,
          padding: 0,
          float: `left`,
        }}
      >
        <div className="img-blk">
          <Img 
            fluid={props.data.pulmonaryEbolism.childImageSharp.fluid} 
          />              
        </div>
        <div className="content-part">
          <h2 className="head">Pulmonary Embolism</h2>
          <div className="clot-question">
            <h3>What is a pulmonary embolism?</h3>
            <ul>
              <li>A pulmonary embolism or <span className="italic-font">PE</span> is a blood clot in a pulmonary (lung) vessel</li>
              <li>A PE occurs when a blood clot breaks off, travels through the blood stream and lodges in the lung, blocking the blood flow</li>
            </ul>
          </div>
          <div className="">
            <h3>What are the symptoms of PE?</h3>
            <p>Symptoms of PE can include:</p>
            <ul>
              <li>Sudden sharp chest pain</li>
              <li>Shortness of breath</li>
              <li>Chest pain that gets worse with deep breathing or coughing</li>
              <li>Coughing up blood or pink, foamy mucus</li>
              <li>Rapid heart rate</li>
              <li>Excessive sweating</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-txt"
        style={{
          borderBottom: `1px solid #ccc`,
          clear: `both`,
          marginBottom: `35px`,
          overflow: `hidden`
        }}
      >
        <h3
          style={{
            margin: `15px 0 35px`,
            width: `100%`,
            float: `left`,
            textAlign: `center`,
          }}
        >Together, DVT and PE are known as <span className="italic-font">venous thromboembolism</span> or VTE.</h3>
      </div>
      <div 
        style={{
          background: `#ffd4cb`,
          padding: `20px 20px 10px 20px`,
        }}
      >
        <h3
          style={{
            margin: 0,
            color: `#000`
          }}
        >What do I do if I think I have developed a blood clot?</h3>
        <p>If you develop a blood clot it is considered a medical emergency, so it is important to seek help right away. If your doctor is not immediately available, go to your nearest hospital emergency department.</p>
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
  fragment bloodClotFluid on File {
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
