import GlobalStyle from "../global.styled";
import { Theme } from "../providers/Theme";
import "../smoke.css";

const myTheme = {
  colors: {
    white: "#ffffff",
    light: "#fafafa",
    dark: "#333",
    body: "#5c5c5c",
    accent: "#84bd00",
  },

  fonts: {
    accent: "Jost",
    body: "Open Sans",
  },

  containerWidth: "1400px",
};

function MyApp({ Component, pageProps }) {
  return (
    <Theme theme={myTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Theme>
  );
}

export default MyApp;
