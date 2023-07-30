import React from "react"
import { Link } from "react-router-dom"

const Pictures = props => {
  //return JSX with an onClick event listener on the top-level <div> that triggers the handleClick function passed down as props from ElephantContainer
  return (
    <div onClick={props.onClick} className="center">
      <img src={props.image} height="400" width="600" />
      <h1>{props.text}</h1>
      <hr />
      <Link to="/facts">Check out some Bitcoin facts!</Link>
      <br />
      <Link to="/factz">Check out some Nostr facts!</Link>
    </div>
  )
  //render an image and text based on the props received from ElephantContainer
}

export default Pictures
