import React from "react";
import Anime from "./anime";
import { ButtonBase, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  animeButton: {
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.white
    }
  },
  div: {
    backgroundColor: theme.palette.common.black,
    display: "block",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.9
    }
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.animeButton}>
      <Link className={classes.div} to="/animes/:id">
        <Anime />
      </Link>
    </ButtonBase>
  );
};
