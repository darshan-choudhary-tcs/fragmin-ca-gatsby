import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class dinForm extends React.Component {
  state = {
    din_number: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/home`)
    }

    return (
      <div className="din_form"
        style={{
          margin: `0 auto 100px`,
          width: `61%` 
        }}
      >
        <p
          style={{
            fontSize: `19px`,
            lineHeight: `26px`,
            margin: `0 0 32px 0`,
          }}

        >This site is intended for Canadian patients with a prescription for FRAGMIN<sup>®</sup>.  A valid FRAGMIN 8-digit DIN is required to view this site.</p>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/home`)
          }}
        >
          <input 
            type="number" 
            name="din_number"
            className="form-text"
            placeholder="Type in the FRAGMIN 8-digit DIN here"
            required={true}
            onChange={this.handleUpdate} 

            style={{
              fontSize: `13px`,
              color: `#0d0d0d`,
              margin: `0 20px 0 0`,
              padding: `0 11px`,
              lineHeight: `53px`,
              width: `295px`,
              height: `53px`,
              border: `1px solid #ccc`,
              borderRadius: `10px`,
              position: `relative`,
            }}
          />
          <button 
            type="submit"
            className="form-submit"
            style={{
              borderRadius: `18px 0`,
              padding: `0 46px`,
              lineHeight: `53px`,
              display: `inline-block`,
              fontSize: `22px`,
              fontWeight: `bold`,
              color: `#ffffff`,
              background: `#e53e26`,
              position: `relative`,
              border: `solid 1px transparent`,
              margin: `0`,
            }}
          >
            Enter Site
          </button>  
        </form>
      </div>
    )
  }
}

export default dinForm
