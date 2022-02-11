import React from "react";
import {makeStyles} from '@material-ui/core';
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    cardAd: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: "#e9ecef",
        marginBottom: "40px"
      },
}));

export default function AdvertisingCard(params) {
    const classes = useStyles();

    return (
        <Card className={classes.cardAd} variant="outlined">
              <CardContent>
                <Typography variant="h6" style={{textAlign: "right"}}>Sponsor</Typography>
                <Typography style={{marginTop:"10px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
              </CardContent>
            </Card>
    );
}