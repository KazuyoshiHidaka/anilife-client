import React from "react";
import {
  makeStyles,
  Typography,
  ButtonBase,
  CardActionArea,
  Card,
  CardMedia,
  CardContent
} from "@material-ui/core";

// SAMPLE DATA
const anime = {
  image: {
    src: "sample.jpg"
  },
  title: "鬼滅の刃",
  copyright: "©吾峠呼世晴／集英社・アニプレックス・ufotable"
};

const useStyles = makeStyles(theme => ({
  animeButton: {
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    color: "#fff",
    "&:hover": {
      opacity: 0.9
    }
  },
  // highlight: {
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   opacity: 0,
  //   overflow: "hidden",
  //   position: "absolute",
  //   transition: "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //   borderRadius: "inherit",
  //   PointerEvent: "none",
  //   backgroundColor: "#fff"
  // },
  animeImage: {
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
    // <Card className={classes.card}>
    //   <CardActionArea>
    //     <CardMedia
    //       // className={classes.media}
    //       image="sample.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    <ButtonBase className={classes.animeButton}>
      <div>
        <img
          className={classes.animeImage}
          src={anime.image.src}
          alt={anime.title}
        />
        <Typography className={classes.copyright} align="left" display="block">
          {anime.copyright}
        </Typography>
        <Typography variant="h5" align="center" color="textPrimary" noWrap>
          {anime.title}
        </Typography>
      </div>
      <span className={classes.highlight}></span>
    </ButtonBase>
  );
};
