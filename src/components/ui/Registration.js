import React from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

import background1 from "../../assets/background1.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "44em",
  },
  form: {
    width: "480px",
    marginTop: "30px",
    marginLeft: "170px",
  },
  button: {
    marginTop: "30px",
    marginBottom: "30px",
    padding: "12px",
    marginLeft: "22rem",
  },
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

export default function Registration(params) {
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
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.background}
        lg
      ></Grid>
      <Grid item container direction="column" justifyContent="center" lg>
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

        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email Address"
            id="name"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
            className={classes.form}
          />

          <TextField
            label="Choose a password"
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            variant="outlined"
            className={classes.form}
          />

          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            type="submit"
            component={Link}
            to="/accountdata"
          >
            Створити акаунт
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
