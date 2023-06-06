import {extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark"
};

// used the same shades of gray as on the rawg.io website:
// https://chakra-ui.com/docs/styled-system/theme#colors and click on "Smart Watch"
// then you get redirected to https://smart-swatch.netlify.app/
const theme = extendTheme({ 
    config,
    colors: {
      gray: {
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111'
      }
    }
   });

export default theme;