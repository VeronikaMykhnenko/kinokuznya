import React from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import BackupIcon from "@material-ui/icons/Backup";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { Alert, AlertTitle } from "@material-ui/lab";

import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  gridcontainer: {
    backgroundColor: "#f8f9fa",
    margin: "auto",
    maxWidth: 1300,
    paddingTop: "50px",
  },
  avatar: {
    width: "150px",
    height: "150px",
  },
  form: {
    width: "380px",
    height: "90px",
    marginRight: "10px",
  },
  button: {
    marginTop: "20px",
    marginBottom: "20px",
    maxWidth: "150px",
  },
}));

const employment = [
  {
    value: "вільний",
  },
  {
    value: "зайнятий",
  },
];

const profession = [
  {
    name: "Адміністратор",
  },
  {
    name: "Актор/ка",
  },
  {
    name: "Асистент",
  },
  {
    name: "Асистент по акторах",
  },
  {
    name: "Бухгалтер",
  },
  {
    name: "Бутафор",
  },
  {
    name: "Гример",
  },
  {
    name: "Директор",
  },
  {
    name: "Декоратор",
  },
  {
    name: "Звукооператор",
  },

  {
    name: "Каскадер",
  },
  {
    name: "Кастинг-директор",
  },
  {
    name: "Кастинг-менеджер",
  },
  {
    name: "Кліпмейкер",
  },
  {
    name: "Композитор",
  },
  {
    name: "Механік камери",
  },
  {
    name: "Монтажер",
  },
  {
    name: "Режисер",
  },
  {
    name: "Стиліст",
  },
  {
    name: "Сценарист",
  },
  {
    name: "Художник-декоратор",
  },
  {
    name: "Художник з гриму",
  },
  {
    name: "Художник по костюмам",
  },
  {
    name: "Художник-постановник",
  },
  {
    name: "Юрист",
  },
];

const validationSchema = yup.object({
  firstname: yup
    .string("Введіть ім'я")
    .max(150, "Можна ввести не більше 150 символів")
    .required("Ім'я обов'язкове"),
  lastname: yup
    .string("Введіть прізвище")
    .max(150, "Можна ввести не більше 150 символів")
    .required("Прізвище обов'язкове"),
  email: yup
    .string("Введіть свою електронну адресу")
    .email("Введіть дійсну адресу електронної пошти")
    .required("Електронна адреса обов’язкова"),
  password: yup
    .string("Введіть ваш пароль")
    .min(8, "Пароль має містити не менше 8 символів")
    .required("Потрібен пароль"),
});

export default function Data() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item md={8}>
        
        <Avatar className={classes.avatar} />
        <Button
          color="primary"
          variant="contained"
          size="small"
          className={classes.button}
        >
          <BackupIcon fontSize="medium" style={{ marginRight: "10px" }} />
          Завантажити
        </Button>
        <Typography variant="subtitle2" style={{ marginBottom: "10px" }}>
          Для найкращих результатів використовуйте зображення розміром не менше
          256х256 пікселів у форматі .jpg або .png
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Ім'я"
                type="text"
                name="firstname"
                id="firstname"
                className={classes.form}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={formik.touched.firstname && formik.errors.firstname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Прізвище"
                type="text"
                name="lastname"
                id="lastname"
                className={classes.form}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Електронна пошта"
                type="email"
                name="email"
                id="email"
                className={classes.form}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Пароль"
                type="password"
                name="password"
                id="password"
                className={classes.form}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Сайт"
                type="link"
                name="link"
                id="link"
                className={classes.form}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                className={classes.form}
                id="profession"
                options={profession.map(
                  (professionItem) => professionItem.name
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Професія"
                    type="text"
                    name="profession"
                    InputProps={{ ...params.InputProps, type: "profession" }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                className={classes.form}
                id="employment"
                options={employment.map(
                  (employmentItem) => employmentItem.value
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Зайнятість"
                    type="text"
                    name="employment"
                    InputProps={{ ...params.InputProps, type: "employment" }}
                  />
                )}
              />
            </Grid>
            <Grid item md={8}>
              <Typography>Про мене</Typography>
              <TextField
                variant="outlined"
                type="text"
                name="aboutme"
                id="aboutme"
                multiline
                rows={5}
                style={{ width: "760px", maxHeight: "200px" }}
              />
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                Зберегти
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item md={4}>
        <Alert severity="info" style={{ marginTop: "280px" }}>
          <AlertTitle>Info</AlertTitle>
          Ваша інформація завжди зашифрована, і треті сторони ніколи не можуть
          отримати до неї доступ. Перегляньте нашу політику конфіденційності{" "}
        </Alert>
        <Alert severity="info" style={{ marginTop: "120px" }}>
          <AlertTitle>Info</AlertTitle>
          Частина цієї інформації з’явиться у вашому загальнодоступному профілі.
          Детальний загальнодоступний профіль допомагає користувачам зі схожими
          професійними інтересами та місцем зв’язуватися з вами.
        </Alert>
      </Grid>
    </Grid>
  );
}
