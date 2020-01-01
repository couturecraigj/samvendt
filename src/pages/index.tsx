/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Speakers from "../components/speakers"
import About from "../components/about"
import Contact from "../components/contact"
// import Schedule from "../components/schedule"

const Main = () => (
  <Layout>
    <Parallax sx={{ display: ["block", "block", "none"] }} pages={5}>
      <Hero offset={0} />
      <Speakers offset={1} />
      {/* <Schedule offset={4} /> */}
      <About offset={2} />
      <Contact offset={4} />
    </Parallax>
    <Parallax sx={{ display: ["none", "none", "block"] }} pages={5}>
      <Hero offset={0} />
      <Speakers offset={1} />
      {/* <Schedule offset={3.5} /> */}
      <About offset={3} />
      <Contact offset={4} />
    </Parallax>
  </Layout>
)

export default Main
