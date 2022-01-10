import React from 'react'; 
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import  Typography  from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({


}));


export default function News() {
    const classes = useStyles();


    return (
        <Grid container >
        <Typography variant="h6">
        Академія кінематографічних мистецтв і наук оголосила шорт-ліст 94-ої премії "Оскар".
        Всього фільми будуть номіновані у 10 категоріях.
        Вручення кінопремії "Оскар" заплановане на 27 березня 2022 року. 
        Нагадаємо, український фільм "Погані дороги" 
        Наталки Ворожбит потрапив до лонг-ліста кінопремії "Оскар" у номінації "Найкращий іноземний фільм", 
        але до шорт-ліста його не внесли. 

        </Typography>
        </Grid>

    );
};