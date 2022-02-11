import React from "react-router-dom";
import { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useFormik } from "formik";
import * as yup from "yup";

import Profile from "./Profile";
import TableProject from "./TableProject";
import Notifications from "./Notifications";

const useStyles = makeStyles((theme) => ({
  gridcontainer: {
    backgroundColor: "#f8f9fa",
    margin: "auto",
    maxWidth: 1300,
    paddingTop: "50px",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
  form: {
    width: "380px",
    height: "90px",
    marginRight: "10px",
  },
  button: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

export default function AccountData(props) {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justifyContent="center"
      className={classes.gridcontainer}
    >
      <Grid item>
        <Typography variant="h3" align="center" style={{marginBottom: "20px"}}>
          Налаштування аккаунта
        </Typography>

        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          style={{ marginBottom: "20px" }}
        >
          <Tab label="Мій профіль" />
          <Tab label="Публікації" />
          <Tab label="Сповіщення" />
        </Tabs>

        {selectedTab === 0 && <Profile />}
        {selectedTab === 1 && <TableProject />}
        {selectedTab === 2 && <Notifications />}
      </Grid>
    </Grid>
  );
}
