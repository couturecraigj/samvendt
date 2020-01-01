/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./icons"
import { UpDown, UpDownWide } from "../styles/animations"
import AboutMDX from "../sections/about.mdx"

const About = ({ offset }: { offset: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="trebleClef"
          hiddenMobile
          width={6}
          color="icon_blue"
          left="50%"
          top="75%"
        />
        <SVG
          icon="marcato"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <SVG
          icon="sixteenthNote"
          width={8}
          color="icon_darkest"
          left="25%"
          top="5%"
        />
        <SVG
          icon="thirtySecondNote"
          hiddenMobile
          width={24}
          color="icon_orange"
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="hundredTwentyEigthNote"
          hiddenMobile
          width={16}
          color="icon_purple"
          left="5%"
          top="80%"
        />
        <SVG
          icon="forteMusic"
          width={12}
          color="icon_brightest"
          left="95%"
          top="50%"
        />
        <SVG
          icon="quaver"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
        />
        <SVG
          icon="bassClef"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG
        icon="eigthNote"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <SVG
        icon="halfNote"
        width={12}
        color="icon_darkest"
        left="70%"
        top="60%"
      />
      <SVG icon="marcato" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG
        icon="marcato"
        width={12}
        color="icon_darkest"
        left="20%"
        top="30%"
      />
      <SVG
        icon="bassClef"
        width={8}
        color="icon_darkest"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset} height="55rem !important">
      <Inner sx={{ marginTop: ["25em", "80em", "0"] }}>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
