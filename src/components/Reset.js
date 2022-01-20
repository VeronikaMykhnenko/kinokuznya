import React from 'react';
import { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        padding: "70px",
        marginBottom: "5rem",
        marginTop: "3rem",
    },
    button:  {
    marginBottom: "30px",
    padding: "12px",
    marginLeft: "10rem"
    },
    form:  {
        width: "480px",
    marginTop: "20px",
    },
}));


export default function Reset(params) {
    
    const classes = useStyles();
    const [inputs, setInputs] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
        setInputs(event.target.email.value);
    }


    return (
        <Grid container justifyContent="center" >
             
            <Card
            className={classes.card}>
            <CardHeader   
            align="center"
            title={<Typography variant="h3">Reset password</Typography>}
            subheader={<Typography variant="subtitle2"> Enter email address to reset password </Typography>}
            />
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <TextField
                        className={classes.form}
                        type="email"
                        name="email"
                        id="email"
                        label="Email Address"
                        variant="outlined" />
                    </CardContent>
                    <CardActions>
                        <Button
                        className={classes.button}
                        type="submit"
                        color="primary"
                        variant="contained"
                        size="large">
                            Reset password
                        </Button>
                    </CardActions>
                    <Grid item>{inputs}</Grid>
                </form>
            </Card>
        </Grid>

    );
    
}