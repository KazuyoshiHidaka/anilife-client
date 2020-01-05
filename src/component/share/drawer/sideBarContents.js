import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawerContents: {
    width: 250,
  },
});

export default function SideBarContents() {
  const classes = useStyles();

  return <div className={classes.drawerContents}></div>;
}
