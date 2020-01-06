import React, {Fragment, useEffect} from 'react';
import sampleAnime from '../../data/sampleAnime';
import sampleTwitter from '../../data/sampleTweets';
import Anime from '../share/animeCard';
import {Grid, makeStyles, Button, Typography, Divider} from '@material-ui/core';
import {useHistory, useParams} from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  timeTableLink: {
    'backgroundColor': theme.palette.background.default,
    'fontWeight': 'bold',
    'marginBottom': theme.spacing(7),
    '&:hover': {background: theme.palette.action.hover},
  },
  offcialLink: {
    'color': theme.palette.primary['800'],
    '&:hover': {
      color: theme.palette.primary['400'],
      backgroundColor: theme.palette.action.hover,
    },
  },
  twitterContentsArea: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    position: 'relative',
  },
  tweetsArea: {
    height: 500,
    overflow: 'scroll',
    border: '1px solid',
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
  },
  tweet: {
    'padding': theme.spacing(2),
    'textDecoration': 'none',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  twitterIcon: {
    position: 'absolute',
    top: -16,
    left: -16,
    borderRadius: '50%',
    background: theme.palette.primary['200'],
    padding: theme.spacing(0.5),
  },
}));

export default function AnimeDetail() {
  const classes = useStyles();
  const history = useHistory();
  const {id} = useParams();
  const currentAnime = sampleAnime.find((anime) => anime.id + '' === id);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={9} sm={8} md={6} lg={5} xl={4}>
        <Grid container justify="center">
          <Grid item sm={6}>
            <Anime {...currentAnime}></Anime>
          </Grid>
        </Grid>

        <Button
          className={classes.timeTableLink}
          fullWidth
          onClick={() => history.push('/search')}
        >
          放送予定を見る
        </Button>

        <Typography variant="subtitle1" color="textPrimary">
          公式サイト
        </Typography>
        <Typography
          display="block"
          component="a"
          variant="subtitle1"
          href={currentAnime.offcial_url}
          className={classes.offcialLink}
          noWrap
          paragraph
        >
          {currentAnime.offcial_url}
        </Typography>

        <Typography variant="subtitle1" color="textPrimary">
          公式Twitterアカウント
        </Typography>
        <Typography
          display="block"
          component="a"
          variant="subtitle1"
          href={currentAnime.twitter_url}
          className={classes.offcialLink}
          noWrap
        >
          {currentAnime.twitter_url}
        </Typography>

        <div className={classes.twitterContentsArea}>
          <TwitterIcon className={classes.twitterIcon}></TwitterIcon>
          <div className={classes.tweetsArea}>
            {sampleTwitter.map((tweet) => {
              return (
                <Fragment key={tweet.id}>
                  <Typography
                    component="a"
                    href={tweet.url}
                    className={classes.tweet}
                    color="textPrimary"
                    display="block"
                  >
                    {tweet.sentence}
                  </Typography>
                  <Divider />
                </Fragment>
              );
            })}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
