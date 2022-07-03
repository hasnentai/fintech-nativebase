import { extendTheme } from 'native-base';

const nativeBaseHackTheme = extendTheme({
  colors: {
    primary: {
      50: '#e94560',
      50: '#e94560',
      100: '#d23e56',
      200: '#ba374d',
      300: '#a33043',
      400: '#8c293a',
      500: '#752330',
      600: '#5d1c26',
      700: '#46151d',
      800: '#2f0e13',
      900: '#17070a',
    },
    secondary: {
      50: '#b8f1b0',
      100: '#a6d99e',
      200: '#93c18d',
      300: '#81a97b',
      400: '#6e916a',
      500: '#5c7958',
      600: '#374835',
      700: '#253023',
      800: '#121812',
      900: '#000000',
    },
    dark: '#191a19',
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});

const navBarTheme = {
  light: { bg: 'amber.100' },
  dark: { bg: 'coolGray.800' },
};

export { nativeBaseHackTheme, navBarTheme };
