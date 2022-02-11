import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { useFormik } from "formik";
import * as yup from "yup";
import "yup-phone";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "550px",
    padding: "70px",
    marginBottom: "5rem",
    marginTop: "3rem",
  },
  button: {
    marginBottom: "20px",
    marginTop: "20px",
   
  },
  form: {
    width: "480px",
    marginTop: "20px",
  },
}));

const validationSchema = yup.object({
  phone: yup
    .string()
    .phone("Enter requred phone")
    .required("Enter requred email"),
  email: yup
    .string("Enter your email")
    .email("Enter requred email")
    .required("Email is required"),
});

export default function Contact(params) {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      text: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  });

  return (
    <Grid container xs={12} justifyContent="center" spacing={4}>
      <Grid item>
        <Card className={classes.card} align='center'>
          <Typography variant="h4">Напишіть нам!</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Enter your phone"
              id="phone"
              name="phone"
              type="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              variant="outlined"
              className={classes.form}
            />
            <TextField
              label="Enter your email address"
              id="email"
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
              label="Enter your text"
              id="text"
              name="text"
              type="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              error={formik.touched.text && Boolean(formik.errors.text)}
              helperText={formik.touched.text && formik.errors.text}
              variant="outlined"
              multiline
              rows={5}
              className={classes.form}
            />
            
          </form>
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
          >
            Зберегти
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}
