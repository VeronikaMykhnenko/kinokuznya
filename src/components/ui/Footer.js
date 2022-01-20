import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';
import Grid  from '@material-ui/core/Grid';
import Button  from '@material-ui/core/Button';
import { Instagram, Facebook, Telegram, YouTube} from '@material-ui/icons';
import { Hidden } from '@material-ui/core';



import google from "../../assets/google.svg";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.gray,
        width: "100%",
        color: "#ced4da",
        zIndex: 1302,
        position: "relative"
    },
    
    mainContainer: {
        position: "absolute",
    },
    link: {
        ...theme.typography.link,
        fontFamily: "Roboto",

    },
    socialLink: {
        ...theme.typography.socialLink,
    }, 
    items: {
        textDecoration: "none"
    },
    appDownload: {
        color: "#adb5bd",
        fontWeight: 300,
},
}));

export default function Footer() {
    const classes = useStyles();

    return (
     <footer className={classes.footer}>
         <Hidden smDown>
        <Grid container justifyContent="center" className={classes.mainContainer} >
            <Grid item> 
            <Grid container direction="row" spacing={2} className={classes.link} >
                <Grid item className={classes.link} component={Link} to="/Публічна оферта">Публічна оферта</Grid>
                <Grid item className={classes.link} component={Link} to="/Зворотній зв'язок">Зворотній зв'язок</Grid>
                <Grid item className={classes.link} component={Link} to="/Інформація">Інформація</Grid>
                <Grid item className={classes.link} component={Link} to="/реклама">Реклама на сайті</Grid>
                <Grid item >
                <a href='https://www.instagram.com/kinokuznya/'> 
                    <Instagram  className={classes.socialLink}/>
                </a>
                </Grid>
                <Grid item>
                    <a href='https://www.facebook.com/kinokuznya.kinokuznyasait'>
                        <Facebook className={classes.socialLink} /> 
                    </a>
                </Grid>
                <Grid item>
                    <a href='https://www.youtube.com/channel/UCXhnrxZ-f0sWV_hjagW9oIQ'>
                        <YouTube  className={classes.socialLink}/> 
                    </a>
                </Grid>
                <Grid item>
                    <a href='https://t.me/kino_kuznya'>
                        <Telegram className={classes.socialLink} />
                    </a>
                </Grid>
            </Grid> 
            </Grid>
        </Grid>
        </Hidden>
        <Button
         href='https://play.google.com/store/apps/details?id=com.dev.kinokuznya' >
             <img alt="Get it on Google Play" 
             className={classes.appDownload}  
             scr={google} />
        </Button>
        
        </footer>
    );
}