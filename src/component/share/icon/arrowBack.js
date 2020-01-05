import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from 'react-router-dom';
import {IconButton, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ArrowBack() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      onClick={history.goBack}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}
