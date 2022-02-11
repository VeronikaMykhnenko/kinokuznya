import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Avatar } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: "20px",
  },
  subtitlePeople: {
    ...theme.typography.subtitle3,
  },
}));

export default function PeopleItem(props) {
  const classes = useStyles();

  return (
<List> 
<ListItem>
    <ListItemAvatar>
      <Avatar alt="Toby March" className={classes.avatar} />
    </ListItemAvatar>
    <ListItemText>
      <Typography variant="h5">{props.name}</Typography>
      
      <Typography className={classes.subtitlePeople}>{props.profession}</Typography>
      <Rating 
      name="simple-controlled" 
      value={props.star} readOnly />
      <Divider />
    </ListItemText>
  </ListItem>
</List>
  );
}
