import React from 'react';
import {Divider, Grid, makeStyles, ButtonBase} from '@material-ui/core';
import Anime from '../share/animeCard';
import {Link} from 'react-router-dom';
import sampleAnime from '../../data/sampleAnime';

const useStyles = makeStyles((theme) => ({
  animeButton: {
    marginTop: theme.spacing(6),
  },
  button: {
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.action.active,
    },
  },
  link: {
    'backgroundColor': theme.palette.background.main,
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
      {sampleAnime.map((anime) => (
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
