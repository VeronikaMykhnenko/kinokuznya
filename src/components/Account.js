import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";


import PinDropIcon from "@material-ui/icons/PinDrop";
import MailIcon from "@material-ui/icons/Mail";
import AddIcon from "@material-ui/icons/Add";

import PeopleList from "./ui/PeopleList";
import AdvertisingCard from "./ui/AdvertisingCard";

const useStyles = makeStyles((theme) => ({
  listItem: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#ffffff",
    marginTop: "20px",
  },
  gridContainer: {
    margin: "auto",
    maxWidth: 1300,
    paddingTop: "50px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    border: "2px solid #fff",
    margin: "-48px auto 0 auto",
    "& > img": {
      margin: 0,
    },
  },
  cardmedia: {
    height: "250px",
  },
  card: {
    maxWidth: 360,
    marginBottom: "40px",
  },
  subtitle: {
    color: "#6c757d",
    marginTop: "10px",
    fontSize: "1rem",
  },
  button: {
    "& > *": {
      margin: "5px",
    },
  },
  about: {
    padding: "40px",
    maxWidth: "855px",
  },
}));

export default function Account(params) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.gridContainer} md={12}>
      <Grid item md={4} justifyContent="center">
        <Card align="center" className={classes.card}>
          <CardMedia>
            <img
              alt=""
              className={classes.cardmedia}
              src={
                "https:///cdn.pixabay.com/photo/2022/01/20/08/24/leaf-6951735_1280.jpg"
              }
            />
            <Avatar
              className={classes.avatar}
              src={
                "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
              }
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h4">Aaron Cunningham</Typography>
            <Typography className={classes.subtitle} variant="subtitle2">
              {"Front-End Product Engineer "}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ marginBottom: "15px", marginTop: "15px" }}
            >
              <PinDropIcon fontSize="small" align="center" /> Poltava
            </Typography>
            <Rating />
            <div className={classes.button}>
              <Button variant="outlined" color="primary">
                <AddIcon fontSize="medium" /> Follow
              </Button>
              <Button variant="outlined" color="primary">
                <MailIcon />
              </Button>
            </div>
          </CardContent>
        </Card>
        <PeopleList />
        <AdvertisingCard />
      </Grid>

      <Grid item md={8}>
        <Card className={classes.about}>
          <Typography variant="h4" align="center">
            About me
          </Typography>
          <CardContent>
            <Typography variant="body1">
              Bit of a go-getter me, creating lovely things that help others.
              You'll most often find me out back in the hammock, listening to
              tunes and bending pixels to my will. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem.
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/editor"
          >
            Додати публікацію
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}
