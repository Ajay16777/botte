/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from 'theme/GlobalStyles';
import breakpoints from './breakpoints';
import typography from 'theme/typography';
import palette from 'theme/palette';

const Theme = ({ children }) => {
  const themeOptions = useMemo(() => {
    return {
      palette,
      breakpoints,
      typography,
      custom: {
        lightBlack: '#3E3E3E',
        white: '#fff',
        lightWhite: '#F7F5F4',
        lightblue: '#1A6A95',
        green: '#619D61 ',
        shadowOne: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
        shadowTwo:
          'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        cardShadow:
          'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
      },
      // overrides: {
      //   MuiButton: {
      //     containedSecondary: {
      //       fontWeight: 500,
      //     },
      // contained: {
      //   backgroundColor: '#FDF7F2',
      // },
      // },
      // },
    };
  }, []);

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
