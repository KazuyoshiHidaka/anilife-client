import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%',
  },
  copyright: {
    color: theme.palette.text.disabled,
    fontSize: theme.typography.animeCopyright.fontSize,
    marginBottom: theme.spacing(3),
  },
  title: {
    paddingBottom: theme.spacing(5),
  },
}));

export default function Anime() {
  const classes = useStyles();

  return (
    <>
      <img className={classes.image} src={anime.image.src} alt={anime.title} />
      <Typography className={classes.copyright} align="left" display="block">
        {anime.copyright}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textPrimary"
        className={classes.title}
        noWrap
      >
        {anime.title}
      </Typography>
    </>
  );
}
