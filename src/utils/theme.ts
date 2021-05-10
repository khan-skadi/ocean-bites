import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const createTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffc107",
    },
    secondary: {
      main: "#196876",
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    },
  },
});

const theme = responsiveFontSizes(createTheme);

export default theme;
