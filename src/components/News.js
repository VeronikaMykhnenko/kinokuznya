import React from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { TablePagination } from "@material-ui/core";

import NewsCard from "./ui/NewsCard";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    maxWidth: 1250,
    margin: "auto",
    marginTop: "30px",
  },
}));

export default function News() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.gridContainer}
      align="center"
      spacing={8}
    >
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="h2"
          style={{ marginBottom: "1.5rem" }}
        >
          Останні новини кінематографу
        </Typography>
        <Typography
          align="center"
          variant="h4"
          style={{ marginBottom: "1.5rem" }}
        >
          Subscribe and get our weekly newsletter in your inbox
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <NewsCard />
      </Grid>
      <Grid item xs={12}>
        <TablePagination component="div" count={100} />
      </Grid>
    </Grid>
  );
}
