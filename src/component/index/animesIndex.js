import React from 'react';
import {Divider, Grid, makeStyles, ButtonBase} from '@material-ui/core';
import Anime from '../anime';
import {Link} from 'react-router-dom';
import sampleAnime from '../../data/sampleAnime';

const animes = [sampleAnime];

const useStyles = makeStyles((theme) => ({
  animeButton: {
    marginTop: theme.spacing(5),
  },
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

export default function AnimesIndex() {
  const classes = useStyles();

  return (
    <>
      {animes.map((anime) => (
        <Grid key={anime.id} container justify="center">
          <Grid item xs={8} sm={4} md={3} lg={2}>
            <div className={classes.animeButton}>
              <ButtonBase className={classes.button}>
                <Link className={classes.link} to={'/animes/' + anime.id}>
                  <Anime
                    image={anime.image}
                    title={anime.title}
                    copyright={anime.copyright}
                  />
                </Link>
              </ButtonBase>
            </div>
            <Divider />
          </Grid>
        </Grid>
      ))}
    </>
  );
}
