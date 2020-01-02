import React from "react";
import Anime from "./anime/anime";
import { ButtonBase, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  animeButton: {
    marginTop: theme.spacing(5),
    "&:hover": {
      backgroundColor: "#fff",
      color: "#fff"
    }
  },
  div: {
    "&:hover": {
      opacity: 0.9
    }
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.animeButton}>
      <div className={classes.div}>
        <Anime />
      </div>
    </ButtonBase>
  );
};
