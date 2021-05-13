import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// background: #f2f4ea
// title: #ff1616

const createTheme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(255, 22, 22)",
      main: "#ffc107",
    },
    secondary: {
      light: "rgb(242, 244, 234)",
      main: "#196876",
    },
  },
});

const theme = responsiveFontSizes(createTheme);

export default theme;
