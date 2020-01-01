import { ParallaxLayer } from "react-spring/renderprops-addons"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <ParallaxLayer offset={0} speed={1.5}>
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1>Hi my name is Sam Vendt</h1>
        <p>
          I love Christ and I love music and because I love both I write songs
          that worship Christ with my talent
        </p>
        <p>Please look around and find out some more about me</p>
      </div>
    </header>
  </ParallaxLayer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
