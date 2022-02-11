import React from "react";

import { makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { TextField } from "@material-ui/core";

import * as yup from 'yup';
import { useFormik } from "formik";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "70px",
    marginBottom: "5rem",
    marginTop: "3rem",
  },
  button: {
    marginBottom: "30px",
    padding: "12px",
    marginLeft: "10rem",
  },
  form: {
    width: "480px",
    marginTop: "20px",
  },
}));

const validationSchema = yup.object({
  email: yup.string()
  .email("Enter required email")
  .required('Email is required')
});

export default function Reset(params) {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
        email: event.target.email.value
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const formik = useFormik({
    initialValues:{
      email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema
  }) 


  return (
    <Grid container justifyContent="center">
      <Card className={classes.card}>
        <CardHeader
          align="center"
          title={<Typography variant="h3">Reset password</Typography>}
          subheader={
            <Typography variant="subtitle2">
              {" "}
              Enter email address to reset password{" "}
            </Typography>
          }
        />
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <TextField
              className={classes.form}
              type="email"
              name="email"
              id="email"
              label="Email Address"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Reset password
            </Button>
          </CardActions>
        </form>
      </Card>
    </Grid>
  );
}
