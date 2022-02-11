import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { Checkbox, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Notifications() {
  const [state, setState] = useState({
    A: true,
    B: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container direction="row">
      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Ми ніколи не будемо розповсюджувати вашу електронну адресу третім
          сторонам. Про спілкування електронною поштою читайте в нашій політиці
          конфіденційності. Переглянути політику конфіденційності.
        </Alert>
      </Grid>
      <Grid item xs={6} style={{ marginTop: "20px" }}>
        <Typography variant="h4">Параметри повідомлень</Typography>
        <Grid item xs={6} style={{ marginTop: "20px" }}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="follow"
                checked={state.checkedA}
                onChange={handleChange}
              />
            }
            label="Хтось починає стежити за мною"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="follow"
                checked={state.checkedB}
                onChange={handleChange}
              />
            }
            label="Нові повідомлення"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="follow"
                checked={state.checkedB}
                onChange={handleChange}
              />
            }
            label="Новий кастинг"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="follow"
                checked={state.checkedB}
                onChange={handleChange}
              />
            }
            label="Новий проект"
          />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Зберегти
        </Button>
      </Grid>
    </Grid>
  );
}
