import React, {useState} from 'react';
import AnimeLinkButton from '../anime/animeLinkButton';
import {Divider, Grid, makeStyles} from '@material-ui/core';

// SAMPLE DATA
const animes = [
  {
    id: 1,
    image: {
      src: 'sample.jpg',
    },
    title: '鬼滅の刃',
    copyright: '©吾峠呼世晴／集英社・アニプレックス・ufotable',
  },
  {
    id: 2,
    image: {
      src: 'sample.jpg',
    },
    title: '鬼滅の刃',
    copyright: '©吾峠呼世晴／集英社・アニプレックス・ufotable',
  },
];

const useStyles = makeStyles((theme) => ({
  animeButton: {
    marginTop: theme.spacing(5),
  },
}));

export default function AnimesIndex() {
  const classes = useStyles();
  const [anime, setAnime] = useState({});

  return (
    <Grid container justify="center">
      <Grid item xs={8} sm={4} md={3} lg={2}>
        <div className={classes.animeButton}>
          <AnimeLinkButton />
        </div>
        <Divider />
      </Grid>
    </Grid>
  );
}
