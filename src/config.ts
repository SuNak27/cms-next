import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  components: {
    Button: {
      variants: {
        success: {
          bg: 'green.400',
          color: 'white',
        },
        danger: {
          bg: 'red.400',
          color: 'white',
        },
        primary: {
          bg: 'blue.400',
          color: 'white',
        },
        secondary: {
          bg: 'gray.400',
          color: 'white',
        },
        info: {
          bg: 'teal.400',
          color: 'white',
        },
        warning: {
          bg: 'yellow.400',
          color: 'white',
        },
      },
      defaultProps: {
        variant: 'solid',
      },
    },
  },
});

export default theme;