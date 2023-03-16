import { extendTheme } from "@chakra-ui/react";

const config = {
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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cakra: {
    theme
  }
}