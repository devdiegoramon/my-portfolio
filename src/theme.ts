import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#5C2FC2',
      },
    },
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        //-apple-system,
        //BlinkMacSystemFont,
        //Segoe UI
        //Roboto
        //Helbetica Neue
        //Arial
        //sans-serif
        //Apple Color Emoji
        //Segoe UI Emoji
        //Segoe UI Symbol
    ].join(','),
    }
  });

  theme = responsiveFontSizes(theme);

export default theme;