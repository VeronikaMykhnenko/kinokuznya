import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import CreateIcon from "@material-ui/icons/Create";
import ShareIcon from "@material-ui/icons/Share";

import { Divider } from "@material-ui/core";

import PeopleList from "./ui/PeopleList";
import AdvertisingCard from "./ui/AdvertisingCard";

import oscar from "../assets/oscar.jpg";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    backgroundColor: "#f8f9fa",
    margin: "auto",
    maxWidth: 1300,
    paddingTop: "50px"

  },
  article: {
    maxWidth: 665,
  },

  title: {
    marginTop: "20px",
    marginBottom: "30px",
  },

  cardAd: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#e9ecef",
    margin: "auto",
  },
  listItem: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#ffffff",
    marginTop: "20px",
  },
  listTitle: {
    ...theme.typography.h4,
  },
  newsItem: {
    ...theme.typography.newsItem,
  },
  textInfo: {
    textAlign: "right",
  },
  subtitlePeople: {
    ...theme.typography.subtitle3,
  },
}));

export default function Article() {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      className={classes.gridContainer}
      spacing={4}
      md={12}
    >
      <Grid item md={8} className={classes.article}>
        <img alt="oscar" src={oscar} />

        <Typography variant="h4" className={classes.title}>
          Оскар
        </Typography>
        <Typography variant="body1" style={{ lineHeight: "2" }}>
          <p>
            Академія кінематографічних мистецтв і наук оголосила шорт-ліст 94-ої
            премії "Оскар" Всього фільми будуть номіновані у 10 категоріях.
            Вручення кінопремії "Оскар" заплановане на 27 березня 2022 року.
            Нагадаємо, український фільм "Погані дороги" Наталки Ворожбит
            потрапив до лонг-ліста кінопремії "Оскар" у номінації "Найкращий
            іноземний фільм", але до шорт-ліста його не внесли.
          </p>
          <p>
            Ідея створення першої кіноакадемії США виникла у голови кінокомпанії
            Metro-Goldwyn-Mayer Луїса Барта Маєра в листопаді 1926 року.
            Основною метою заснування Академії було об'єднання в союз усієї
            кіноіндустрії Америки. Дев'ять ключових кінокомпаній країни і п'ять
            спілок підписали «Базову угоду кіностудій». Проте ця угода
            стосувалася лише технічних працівників, а креативні групи, режисери,
            сценаристи й актори все ще дотримувалися умов стандартних
            контрактів.
          </p>
        </Typography>
      </Grid>
      <Grid item md={4}>
        <AdvertisingCard />
        <List className={classes.listItem}>
          <ListItem className={classes.newsItem}>
            <ListItemIcon>
              <ViewHeadlineIcon />
            </ListItemIcon>
            <ListItemText>Created</ListItemText>
            <ListItemText className={classes.textInfo}>17/11/2017</ListItemText>
          </ListItem>
          <Divider light />
          <ListItem className={classes.newsItem}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText>Last updated</ListItemText>
            <ListItemText className={classes.textInfo}>23/12/2017</ListItemText>
          </ListItem>
          <Divider light />
          <ListItem className={classes.newsItem}>
            <ListItemIcon>
              <ThumbUpAltIcon />
            </ListItemIcon>
            <ListItemText>Likes</ListItemText>
            <ListItemText className={classes.textInfo}>214</ListItemText>
          </ListItem>
          <Divider light />
          <ListItem className={classes.newsItem}>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText>Share</ListItemText>
            <ListItemText className={classes.textInfo}>52</ListItemText>
          </ListItem>
        </List>
        <PeopleList />
      </Grid>
    </Grid>
  );
}
