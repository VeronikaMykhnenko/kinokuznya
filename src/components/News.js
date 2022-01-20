import React from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { TablePagination } from "@material-ui/core";

import oscar from "../assets/oscar.jpg";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    maxWidth: 1250,
    margin: 'auto'
  },
}));

export default function News() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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
      <Grid item xs={4}>
        <Card style={{ marginBottom: "20px" }}>
          <CardActionArea component={Link} to="/новина">
            <CardMedia content="img" height="140px" img="/assets/oscar.jpeg">
              <img src={oscar} alt='' />
            </CardMedia>
            <CardContent>
              <Typography
                variant="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Oscar
              </Typography>
              <Typography variant="body1" content="p">
                Академія кінематографічних мистецтв і наук оголосила шорт-ліст
                94-ої премії "Оскар".
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardHeader
            align="left"
            avatar={<Avatar>T</Avatar>}
            title={<Typography variant="h5">Toby March</Typography>}
            subheader={
              <Typography variant="subtitle2">
                September 14, 2016 {bull} 4 min read{" "}
              </Typography>
            }
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ marginBottom: "20px" }}>
          <CardActionArea component={Link} to="/новина">
            <CardMedia content="img" height="140px" img="/assets/oscar.jpeg">
              <img src={oscar} alt="" />
            </CardMedia>
            <CardContent>
              <Typography
                variant="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Oscar
              </Typography>
              <Typography variant="body1" content="p">
                Академія кінематографічних мистецтв і наук оголосила шорт-ліст
                94-ої премії "Оскар".
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardHeader
            align="left"
            avatar={<Avatar>T</Avatar>}
            title={<Typography variant="h5">Toby March</Typography>}
            subheader={
              <Typography variant="subtitle2">
                September 14, 2016 {bull} 4 min read{" "}
              </Typography>
            }
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ marginBottom: "20px" }}>
          <CardActionArea component={Link} to="/новина">
            <CardMedia content="img" height="140px" img="/assets/oscar.jpeg">
              <img src={oscar} alt="" />
            </CardMedia>
            <CardContent>
              <Typography
                variant="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Oscar
              </Typography>
              <Typography variant="body1" content="p">
                Академія кінематографічних мистецтв і наук оголосила шорт-ліст
                94-ої премії "Оскар".
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardHeader
            align="left"
            avatar={<Avatar>T</Avatar>}
            title={<Typography variant="h5">Toby March</Typography>}
            subheader={
              <Typography variant="subtitle2">
                September 14, 2016 {bull} 4 min read{" "}
              </Typography>
            }
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ marginBottom: "20px" }}>
          <CardActionArea component={Link} to="/новина">
            <CardMedia content="img" height="140px" img="/assets/oscar.jpeg">
              <img src={oscar} alt="" />
            </CardMedia>
            <CardContent>
              <Typography
                variant="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Oscar
              </Typography>
              <Typography variant="body1" content="p">
                Академія кінематографічних мистецтв і наук оголосила шорт-ліст
                94-ої премії "Оскар".
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardHeader
            align="left"
            avatar={<Avatar>T</Avatar>}
            title={<Typography variant="h5">Toby March</Typography>}
            subheader={
              <Typography variant="subtitle2">
                September 14, 2016 {bull} 4 min read{" "}
              </Typography>
            }
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ marginBottom: "20px" }}>
          <CardActionArea component={Link} to="/новина">
            <CardMedia content="img" height="140px" img="/assets/oscar.jpeg">
              <img src={oscar} alt="" />
            </CardMedia>
            <CardContent>
              <Typography
                variant="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Oscar
              </Typography>
              <Typography variant="body1" content="p">
                Академія кінематографічних мистецтв і наук оголосила шорт-ліст
                94-ої премії "Оскар".
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardHeader
            align="left"
            avatar={<Avatar>T</Avatar>}
            title={<Typography variant="h5">Toby March</Typography>}
            subheader={
              <Typography variant="subtitle2">
                September 14, 2016 {bull} 4 min read{" "}
              </Typography>
            }
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ marginBottom: "20px" }}>
          <CardActionArea component={Link} to="/новина">
            <CardMedia content="img" height="140px" img="/assets/oscar.jpeg">
              <img src={oscar} alt="" />
            </CardMedia>
            <CardContent>
              <Typography
                variant="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                Oscar
              </Typography>
              <Typography variant="body1" content="p">
                Академія кінематографічних мистецтв і наук оголосила шорт-ліст
                94-ої премії "Оскар".
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardHeader
            align="left"
            avatar={<Avatar>T</Avatar>}
            title={<Typography variant="h5">Toby March</Typography>}
            subheader={
              <Typography variant="subtitle2">
                September 14, 2016 {bull} 4 min read{" "}
              </Typography>
            }
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TablePagination component="div" count={100} />
      </Grid>
    </Grid>
  );
}
