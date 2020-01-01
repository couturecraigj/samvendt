/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./icons"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/intro.mdx"

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG
          icon="quaver"
          width={6}
          color="icon_darkest"
          left="65%"
          top="75%"
        />
        <SVG
          icon="halfNote"
          width={6}
          color="icon_darker"
          left="40%"
          top="15%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="bassClef"
          hiddenMobile
          width={16}
          color="icon_blue"
          left="80%"
          top="10%"
        />
        <SVG
          icon="marcato"
          width={12}
          color="icon_brightest"
          left="90%"
          top="50%"
        />
        <SVG
          icon="eigthNote"
          width={16}
          color="icon_darker"
          left="70%"
          top="90%"
        />
        <SVG
          icon="marcato"
          width={16}
          color="icon_darkest"
          left="30%"
          top="65%"
        />
        <SVG
          icon="sixteenthNote"
          width={16}
          color="icon_pink"
          left="18%"
          top="15%"
        />
        <SVG
          icon="eigthNote"
          width={6}
          color="icon_darkest"
          left="75%"
          top="10%"
        />
        <SVG
          icon="thirtySecondNote"
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
        width={24}
        color="icon_darker"
        left="5%"
        top="70%"
      />
      <SVG
        icon="eigthNote"
        width={6}
        color="icon_darkest"
        left="4%"
        top="20%"
      />
      <SVG
        icon="eigthNote"
        width={12}
        color="icon_darkest"
        left="50%"
        top="60%"
      />
      <SVG
        icon="forteMusic"
        width={8}
        color="icon_darkest"
        left="95%"
        top="90%"
      />
      <SVG
        icon="thirtySecondNote"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="40%"
        top="80%"
      />
      <SVG icon="marcato" width={8} color="icon_darker" left="25%" top="5%" />
      <SVG icon="eigthNote" width={64} color="icon_green" left="95%" top="5%" />
      <SVG
        icon="quaver"
        hiddenMobile
        width={64}
        color="icon_purple"
        left="5%"
        top="90%"
      />
      <SVG
        icon="sixteenthNote"
        width={6}
        color="icon_darkest"
        left="10%"
        top="10%"
      />
      <SVG
        icon="halfNote"
        width={12}
        color="icon_darkest"
        left="40%"
        top="30%"
      />
      <SVG icon="quaver" width={16} color="icon_darker" left="10%" top="50%" />
      <SVG icon="quaver" width={8} color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
