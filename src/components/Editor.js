import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";

import RichTextEditor from "./ui/RichTextEditor";

import '../components/Style.css';

export default function Editor(params) {
  return (
    <Grid
      container
      md={12}
      justifyContent="center"
      spacing={4}
      className='gridContainer'
    >
      <Grid item>
        <Typography
          align="center"
          variant="h3"
          style={{ marginBottom: "20px" }}
        >
          Додавання нового запису
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          style={{ marginBottom: "20px" }}
        >
          Обов’язково заповніть усі поля
        </Typography>
        <form justifyContent="center">
          <TextField
            label="Заголовок"
            id="header"
            name="header"
            type="text"
            variant="outlined"
            className='form'
          />
          <br />
          <TextField
            label="Опис"
            id="description"
            name="description"
            type="text"
            variant="outlined"
            className="form"
          />
        </form>
        <RichTextEditor />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className='button-btn'
        >
          Публікувати
        </Button>
      </Grid>
    </Grid>
  );
}
