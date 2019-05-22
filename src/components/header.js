import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"

import Logo from "../components/logo"

class Header extends React.Component {
  render() {
    // if (!isLoggedIn()) {
    //   navigate(`/`)
    // }

    return (
      <header id="header_wrapper">
        <div id="site_strip">
          <div 
            style={{
              width: 950,
              margin: `0 auto`,
            }}
          >
            {isLoggedIn() ? (
            <a
              style={{
                float: `right`,
                background: `none 0px 0px repeat scroll rgb(206, 231, 218)`,
                padding: `3px 20px`,
                fontSize: `15px`,
                color: `#005138`,
                textDecoration: `none`,
              }}
              href="/"
              onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/`))
              }}
            >
              Logout
            </a>
            ) : null}     
          </div>
        </div>  
        <div 
          id="header"
          style={{ 
            maxWidth: `950px`,
            margin: `20px auto 37px`,
            overflow: `hidden`,
            borderBottom: `1px solid #005138`
          }}
        >
          <div 
            style={{ 
              width: `210px`,
              float: `left`
            }}        
          >
            <Link
              to="/home">
              <Logo />
            </Link>
          </div>

          <div className="section clearfix">
            <div className="region region-header">
              <div className="content">
                <ul 
                  className="menu clearfix" 
                  style={{ 
                    float: `right`,
                    margin: `51px 0 0`,
                  }}              
                >
                  <li 
                    style={{
                      display: `inline-block`,
                      textAlign: `center`,
                      verticalAlign: `bottom`,
                      width: `80px`,
                      marginRight: `8px`,
                      fontSize: `14px`,
                    }}
                  >
                    <Link
                      to="/blood_clot"
                      style={{
                        color: `#005138`,
                        lineHeight: `18px`,
                        display: `block`,
                        padding: `14px 0`,
                        textDecoration: `none`
                      }}
                      >
                      What is a blood clot?
                    </Link>
                  </li>
                  <li 
                    style={{
                      display: `inline-block`,
                      textAlign: `center`,
                      verticalAlign: `bottom`,
                      width: `80px`,
                      marginRight: `8px`,
                      fontSize: `14px`,
                    }}
                  >            
                    <Link
                      to="/about"
                      style={{
                        color: `#005138`,
                        lineHeight: `18px`,
                        display: `block`,
                        padding: `14px 0`,
                        textDecoration: `none`
                      }}
                    >
                      About FRAGMIN
                    </Link>
                  </li>
                  <li 
                    style={{
                      display: `inline-block`,
                      textAlign: `center`,
                      verticalAlign: `bottom`,
                      width: `80px`,
                      marginRight: `8px`,
                      fontSize: `14px`,
                    }}
                  > 
                    <Link
                      to="/why_fragmin"
                      style={{
                        color: `#005138`,
                        lineHeight: `18px`,
                        display: `block`,
                        padding: `14px 0`,
                        textDecoration: `none`
                      }}
                    >                  
                      Why I take FRAGMIN
                    </Link>
                  </li>   
                </ul>  
              </div>
            </div>
          </div>
        </div>  
      </header>
    )
  }
}

export default Header