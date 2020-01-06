import React from 'react';
import PropTypes from 'prop-types';
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

export default function Anime(props) {
  const classes = useStyles();
  const {image, title, copyright} = props;

  return (
    <>
      <img className={classes.image} src={image} alt={title} />
      <Typography className={classes.copyright} align="left" display="block">
        {copyright}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textPrimary"
        className={classes.title}
        noWrap
      >
        {title}
      </Typography>
    </>
  );
}

Anime.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};
