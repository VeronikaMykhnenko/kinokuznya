import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import background1 from "../../assets/background1.png";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50em",
    paddingTop: 0,
  },
  textField: {
    width: "480px",
    marginTop: "30px",
  },
  button: {
    marginTop: "30px",
    marginBottom: "30px",
    padding: "12px",
  },
}));

export default function Registration(params) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: true,
  });

  const [inputs, setInputs] = useState();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    setInputs(event.target.email.value + event.target.password.value);
  };

  return (
    <Grid container direction="row" style={{ marginTop: "0", paddingTop: "0" }}>
      <Grid item container className={classes.background} lg></Grid>
      <Grid item container direction="column" justifyContent="center" lg>
        <Grid item>
          <Typography variant="h3" align="center" style={{ lineHeiht: 1 }}>
            Реєстрація
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ marginTop: "10px" }}
          >
            We are waiting
          </Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <form onSubmit={handleSubmit}>
            <Grid item>
            <TextField
              label="Email Address"
              id="name"
              name="email"
              type="email"
              variant="outlined"
              className={classes.textField}
            />
            </Grid>
            <Grid item> 
            <TextField
              label="Choose a password"
              id="password"
              type="password"
              name="password"
              variant="outlined"
              className={classes.textField}
              helperText="At least seven characters with one numeral"
            />
            </Grid>
            <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked}
                name="checked"
                color="primary"
              />
            }
            label="I agree to the Terms & Conditions"
          />
          </Grid>
            <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.button}
              type="submit"
            >
              Створити акаунт
            </Button>
            </Grid>
          </form>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginTop: "10px" }}
        >
          <Grid item>{inputs}</Grid>
          
          
        </Grid>
        <Grid item container justifyContent="center"></Grid>
      </Grid>
    </Grid>
  );
}
