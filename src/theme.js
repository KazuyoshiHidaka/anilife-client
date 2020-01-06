import {createMuiTheme, fade} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

export default createMuiTheme({
  overrides: {
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        minWidth: '40px',
      },
    },
  },
  palette: {
    type: 'dark',
    background: {
      main: '#121212',
    },
    primary: blue,
    action: {
      hover: fade('#fff', 0.2),
    },
  },
  typography: {
    animeCopyright: {
      fontSize: '0.5rem',
    },
  },
});
