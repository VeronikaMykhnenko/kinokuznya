import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    infoText: {
        color: "#343a40"
    },
}));

export default function Information() {
    const classes = useStyles;

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid item style={{ padding: "3em", marginRight: "5em", marginLeft: "5em", marginBottom: "1em" }} className={classes.infoText}>
                    <Typography variant="h3" style={{ textAlign: 'center'}}>
                    Шановні Користувачі!
                    </Typography>
                    <Typography variant="h6">
                        <p>
                        Інтернет-сайт KinoKuznya.com - це платформа для розміщення Ваших анкет (з професійними даними) в сфері кіно, телебачення, реклами та шоу-бізнесу.
                         Зареєструвавшись на сайті, Ви легко зможете:</p>
                         <ul>
                         <li>обрати собі команду собі команду, зі списку учасників «ЛЮДИ» по департаментах,
                         відштовхуючись від їх зайнятості, виділеної червоною або зеленою рамкою аватарки;</li>
                         <li>розмістити своє оголошення та читати публікації в розділі «НОВИНИ»;</li>
                         <li>створити «КАСТИНГ» та запросити нових учасників для майбутніх проектів в розділі «ПРОЕКТИ»,
                         із зазначенням підготовчого періоду та дати старту, якщо вважаєте за потрібне;</li>
                         <li>розділ «RENTAL & SALE» дає Вам можливість продати, взяти в оренду або дати в оренду, будь-то реквізит або щось необхідне оточуючим.</li>
                         </ul>
                         <p>
                         Так само Ви можете віддати свій голос на користь інших учасників сайту KinoKuznya.com,
                         Ваш голос виводить інших користувачів на новий рівень.
                         Реєструйтеся та створюйте команду своєї мрії - «DREAM TEAM»
                        </p>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

}