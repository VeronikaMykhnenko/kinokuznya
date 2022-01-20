import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from '@material-ui/core/CardContent';
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles( theme => ({
    textField: {
        width: "480px",
    marginTop: "10px",
    },
    card: {
        padding: "70px",
        marginBottom: "5rem",
        marginTop: "3rem",
    },
    button: {
        marginLeft: "12.5rem"
    },

}));

export default function Login(params) {
    const classes = useStyles();
    
    const [inputs, setInputs] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
        // setInputs(event.target.email.value + ' ' + event.target.password.value);
        setInputs(`${event.target.email.value} ${event.target.password.value}`);
    };

    
    return (
        <Grid container justifyContent="center"  >
            <Grid item container justifyContent="center"  md={12}>
                <Card className={classes.card}>
                    <CardHeader 
                    align="center"
                    title={<Typography variant="h3">Hello again </Typography>}
                    subheader={<Typography variant="subtitle2">Sign in to your account to continue </Typography>}
                     />
                     <form onSubmit={handleSubmit}>
                     <CardContent>
                     <TextField
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    variant="outlined"
                    className={classes.textField}
                    />
                    
                     </CardContent>
                     <CardContent>
                     <TextField
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    variant="outlined"
                    className={classes.textField}
                    helperText={<Typography>Forgot password? 
                        <Typography component={Link} to="/reset"> Reset here </Typography> 
                        </Typography>}
                    />
                    
                     </CardContent>
                     <CardActions >
                     <Button 
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    className={classes.button}
                    >
                        Log in
                    </Button>
                     </CardActions>
                     <Grid item>{inputs}</Grid>
                     </form>
                   
                </Card>
            </Grid>
        </Grid>

    );
}
