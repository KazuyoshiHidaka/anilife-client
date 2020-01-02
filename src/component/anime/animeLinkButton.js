import React from 'react';
import Anime from './anime';
import {ButtonBase, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.white,
    },
  },
  link: {
    'backgroundColor': theme.palette.common.black,
    'display': 'block',
    'textDecoration': 'none',
    '&:hover': {
      opacity: 0.9,
    },
  },
}));

export default function animeLinkButton() {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.button}>
      <Link className={classes.link} to="/animes/:id">
        <Anime />
      </Link>
    </ButtonBase>
  );
}
