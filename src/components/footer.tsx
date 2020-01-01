/** @jsx jsx */
import {
  Footer as ThemeFooter,
  Styled,
  Flex,
  useColorMode,
  jsx,
} from "theme-ui"
import { Button } from "@theme-ui/components"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  matchMedia("(prefers-color-scheme: dark)").onchange = e =>
    e.matches ? setColorMode("dark") : setColorMode("light")

  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <ThemeFooter>
      <Button
        bg="heading"
        color="background"
        sx={{
          padding: "1px 7px",
          marginBottom: 18,
          marginRight: "auto",
          marginLeft: "auto",
          display: "block",
          borderRadius: 0,
        }}
        onClick={toggleColorMode}
      >
        {isDark ? "Light" : "Dark"}
      </Button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <img
          width="20"
          height="20"
          src="https://img.lekoarts.de/gatsby/logo_w30.png"
          alt="LekoArts Logo"
        />
        {` `}
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma"
        >
          Theme
        </Styled.a>
        <div sx={{ mx: 1 }}>inspired by</div>
        {` `}
        <Styled.a
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de/en"
        >
          LekoArts
        </Styled.a>
      </Flex>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 1,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <div sx={{ mx: 1 }}>designed by</div>
        <Styled.a
          aria-label="Link to the designer's github"
          href="https://github.com/couturecraigj/AboutMe"
        >
          Craig Couture
        </Styled.a>
      </Flex>
    </ThemeFooter>
  )
}

export default Footer
