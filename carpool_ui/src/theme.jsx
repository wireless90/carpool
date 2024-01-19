import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    // Define the type of the theme
    mode: 'light',

    // Define the primary color (used for buttons, icons, etc.)
    primary: {
      main: '#000000', // Your specified green color,
      contrastText:"#ffffff"
    },

    // Define the secondary color (used for secondary actions, selections, etc.)
    secondary: {
      main: '#38e8fa', // Example secondary color, replace with your preference
    },

    // Define background colors
    background: {
      default: '#ffffff', // White background
      paper: '#ffffff',
    },

    // Define text colors
    text: {
      primary: '#000000', // Black text
      secondary: 'rgba(0, 0, 0, 0.7)', // Slightly lighter black for secondary text
    },
  },

  // Additional customizations can be defined here
  // For example, typography, shape, breakpoints, etc.
});

export default theme;
