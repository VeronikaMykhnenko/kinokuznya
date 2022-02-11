import React from "react";
import { Divider, ListItemAvatar, makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

import NewsCard from "./ui/NewsCard";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    margin: "auto",
    maxWidth: 1300,
    paddingTop: "50px",
  },
  avatar:{
      height: "100px",
      width: "100px",
      marginRight: "70px"
  }
}));

export default function Projects(params) {
  const classes = useStyles();

  return (
    <Grid container md={12} spacing={4} justifyContent="center" className={classes.gridContainer}>
        <Typography variant="h3"  > Looking for...</Typography>
      <NewsCard />
    </Grid>
  );
}
