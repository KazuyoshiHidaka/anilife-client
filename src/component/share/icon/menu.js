import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarContents from '../drawer/sideBarContents';
import {makeStyles, IconButton, SwipeableDrawer} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Menu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <SideBarContents />
      </SwipeableDrawer>
    </>
  );
}
