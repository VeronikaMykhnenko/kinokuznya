import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";

import { useFormik } from "formik";
import * as yup from "yup";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "480px",
    marginTop: "10px",
    margin: "10px"
  },
  card: {
    padding: "70px",
    marginBottom: "5rem",
    marginTop: "3rem",
    maxWidth: "550px",
  },
  button: {},
}));

const validationSchema = yup.object({
  email: yup
    .string("Введіть свою електронну адресу")
    .email("Введіть дійсну адресу електронної пошти")
    .required("Електронна адреса обов’язкова"),
  password: yup
    .string("Введіть ваш пароль")
    .min(8, "Пароль має містити не менше 8 символів")
    .required("Потрібен пароль"),
});

export default function Login(params) {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  });

  return (
    <Grid container justifyContent="center" md={12}>
      <Card className={classes.card} align="center">
        <CardHeader
          align="center"
          title={<Typography variant="h3">Hello again </Typography>}
          subheader={
            <Typography variant="subtitle2">
              Sign in to your account to continue{" "}
            </Typography>
          }
        />
        <CardContent>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="Email Address"
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                className={classes.textField}
              />
              <TextField
                label="Password"
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                variant="outlined"
                className={classes.textField}
              />
              <div>
                <Typography align='center'> 
                  {" "}
                  Forgot password?
                  <Typography component={Link} to="/reset">
                    {" "}
                    Reset here{" "}
                  </Typography>
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checked}
                      name="checked"
                      onChange={handleChange}
                      color="primary"
                      style={{ marginLeft: "20px" }}
                    />
                  }
                  label="Remember me next time"
                />
              </div>

              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.button}
              >
                Log in
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
