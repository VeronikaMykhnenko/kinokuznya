import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";


const useStyles = makeStyles((theme) => ({
    listItem: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: "#ffffff",
        marginTop: "20px",
        marginBottom: "40px"
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

export default function PeopleList(params) {
    const classes = useStyles();
    return (
        <List className={classes.listItem}>
              <ListItem >
                <ListItemText className={classes.listTitle}>
                    Люди
                    </ListItemText>
                <Button
                  color="primary"
                  component={Link}
                  to="/люди"
                  size="small"
                  style={{ textAlign: "right" }}
                >
                  Подивитися всіх
                  <NavigateNextIcon fontSize="small" />
                </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Daniel Cameron" />
                </ListItemAvatar>
                <ListItemText>
                  Daniel Cameron
                 <Typography className={classes.subtitlePeople}>
                     Producer
                     </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Toby March" />
                </ListItemAvatar>
                <ListItemText>
                  Toby March
                  <Typography className={classes.subtitlePeople} >
                  Director
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Jack Torch" />
                </ListItemAvatar>
                <ListItemText>
                  Jack Torch
                  <Typography className={classes.subtitlePeople}>
                      Actor
                </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Tom Torn" />
                </ListItemAvatar>
                <ListItemText>
                  Tom Torn
                  <Typography className={classes.subtitlePeople}>
                      Artist
                </Typography>
                </ListItemText>
              </ListItem>
            </List>
    );
    
}