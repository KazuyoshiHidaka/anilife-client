import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableTemporaryDrawer from '../drawer/drawer';
import SideBarContents from '../drawer/sideBarContents';
import {makeStyles, IconButton} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Menu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableTemporaryDrawer
        position="left"
        contents={<SideBarContents />}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </>
  );
}
