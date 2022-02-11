import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

import AdvertisingCard from "./ui/AdvertisingCard";
import PeopleItem from "./ui/PeopleItem";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: 360,
    marginBottom: "50px",
  },
  list: {
    backgroundColor: "#ffffff",
    paddingTop: "0px",
    maxWidth: 855,
  },
  gridContainer: {
    backgroundColor: "#f8f9fa",
    margin: "auto",
    maxWidth: 1300,
    paddingTop: "50px"
  },
}));

const people = [
  {
    name: "Teodor Cameron",
    profession: "artist",
    star: 5,
  },
  {
    name: "Rudolf Fraiser",
    profession: "operator",
    star: 1.2,
  },
  {
    name: "Robin  Lester",
    profession: "producer",
    star: 3,
  },
  {
    name: "Colin Staton",
    profession: "costume designer",
    star: 4,
  },
];

export default function People(params) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container md={12} spacing={4} className={classes.gridContainer}>
      <Grid item md={4}>
        <List className={classes.checkbox}>
          <div>
            <Autocomplete
              id="search"
              style={{ width: "250px" }}
              options={people.map((option) => option.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
          </div>

          <ListItem>
            <ListItemIcon>
              <Checkbox
                name="checkedA"
                style={{ color: "green" }}
                checked={state.checked}
                onChange={handleChange}
              />
            </ListItemIcon>
            <ListItemText>Free</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                name="checkedB"
                style={{ color: "red" }}
                checked={state.checked}
                onChange={handleChange}
              />
            </ListItemIcon>
            <ListItemText>In work</ListItemText>
          </ListItem>
        </List>
        <AdvertisingCard />
      </Grid>
      <Grid item  md={8}>
        <List className={classes.list}>
          <ListItem style={{ backgroundColor: "#e9ecef", height: "70px"}}>
            <Typography variant="h4">Active People</Typography>
          </ListItem>
          {people.map((peopleItem) => (
            <PeopleItem
              name={peopleItem.name}
              profession={peopleItem.profession}
              star={peopleItem.star}
            />
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
