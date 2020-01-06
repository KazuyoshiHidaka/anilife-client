import {createMuiTheme} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

export default createMuiTheme({
  overrides: {
    MuiListItemIcon: {
      root: {
        color: 'inherit',
      },
    },
  },
  palette: {
    type: 'dark',
    background: {
      main: '#121212',
    },
    primary: blue,
  },
  typography: {
    animeCopyright: {
      fontSize: '0.5rem',
    },
  },
});
