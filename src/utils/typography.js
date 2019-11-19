import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    h1: {
      fontFamily: 'Roboto, sans-serif',
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
    },
    h6: {
      fontFamily: 'Roboto, sans-serif',
    },
    p: {
      fontFamily: 'Roboto, sans-serif',
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
