import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "350px",
        height: "550px"
    },
}));

const news = [
  {
    title: "Oscar",
    subtitle:
      "Академія кінематографічних мистецтв і наук оголосила шорт-ліст 94-ої премії Оскар",
    image:
      "https://cdn.pixabay.com/photo/2014/10/16/09/15/lens-490806_1280.jpg",
    link: "/новина",
    author: "Robin Williams",
    data: "24",
    timeread: "3min",
  },
  {
    title: "New film",
    subtitle: "Tomorow we can see film by famous producer",
    image:
      "https://cdn.pixabay.com/photo/2016/11/22/19/41/filmstrip-1850277_1280.jpg",
    link: "",
    author: "Kate Jonson",
    data: "24",
    timeread: "3min",
  },
  {
    title: "НІ - знищенню культури!",
    subtitle:
      "Міністерство фінансів планує урізати фінансування всіх напрямків діяльності Міністерства культури, молоді та спорту",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/camera-1867184_1280.jpg",
    link: "",
    author: "Tom Redder",
    data: "3 вересня",
    timeread: "2min",
  },
];

export default function NewsCard(params) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={4}>
      {news.map((newsItem) => {
        return (
          <Grid item xs={4}>
            <Card style={{ marginBottom: "20px" }} className={classes.card}>
              <CardActionArea component={Link} to={newsItem.link}>
                <CardMedia content="image">
                  <img
                    style={{ height: "300px", width: "280" }}
                    alt=""
                    src={newsItem.image}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h4"
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    {newsItem.title}
                  </Typography>
                  <Typography variant="body1" content="p">
                    {newsItem.subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardHeader
                align="left"
                avatar={<Avatar></Avatar>}
                title={<Typography variant="h5">{newsItem.author}</Typography>}
                subheader={
                  <Typography variant="subtitle2">
                    {newsItem.data} {bull} {newsItem.timeread}
                  </Typography>
                }
              />
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
