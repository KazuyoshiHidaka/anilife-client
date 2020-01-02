import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

// SAMPLE DATA
const anime = {
  image: {
    src: "sample.jpg"
  },
  title: "鬼滅の刃",
  copyright: "©吾峠呼世晴／集英社・アニプレックス・ufotable"
};

const useStyles = makeStyles(theme => ({
  div: {
    paddingBottom: theme.spacing(5),
    backgroundColor: theme.palette.common.black
  },
  image: {
    maxWidth: "100%"
  },
  copyright: {
    color: theme.palette.text.disabled,
    fontSize: theme.typography.animeCopyright.fontSize,
    marginBottom: theme.spacing(3)
  },
  title: {}
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <img className={classes.image} src={anime.image.src} alt={anime.title} />
      <Typography className={classes.copyright} align="left" display="block">
        {anime.copyright}
      </Typography>
      <Typography variant="h5" align="center" color="textPrimary" noWrap>
        {anime.title}
      </Typography>
    </div>
  );
};
