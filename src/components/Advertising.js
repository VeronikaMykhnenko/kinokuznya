import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    informAd: {
        marginLeft: "10px"
    },
})

);

export default function Advertising() {
    const classes = useStyles;

    return (
        <Grid container direction="column" xs={12} >
            <Grid item 
            className={classes.informAd} 
            style={{ padding: "3em", marginRight: "5em", marginLeft: "5em", marginBottom: "1em" }}>
                <Grid item  >
                <Typography variant="h3" style={{ textAlign: 'center'}}>
                Реклама на сайті
                </Typography>
                </Grid>
            <Grid item container justify="center"  >
                <Grid item >
                <Typography variant="h6" >
                <p>Ні для кого не новина, що реклама - це двигун торгівлі.
                Ми - KinoKuznya.com, тому не виключення. 
                Розмістивши свою рекламу в «каруселі» верхнього рядка нашого сайту, 
                Ви обов'язково потрапите в поле зору користувачів. 
                Натиснувши на Вашу рекламу, людина автоматично переходить за посиланням на Вашу сторінку,
                де вже більш детально викладена інформація та вказано повний перелік Ваших послуг.</p>
                <p> Так само Ви маєте можливість закріпити своє оголошення в «ТОПі» розділу «RENTAL & SALE».
                Шукаючи потрібні оголошення, користувачі будуть в першу чергу бачити Ваше, як нагадування.
                Оголошення буде виділено певним кольором та поміткою «в ТОПі». Термін публікації буде залежати від Вашого побажання.
                Ви зможете додавати користувачів сайту KinoKuznya.com в «Обране».
                Це надасть Вам можливість швидко зв’язатись з тими, хто Вам потрібен.
                </p>
                <p> Обраних користувачів може бути не більше п'яти осіб, якщо кількість перевищує цю цифру,
                за Вашим бажанням діятиме окрема тарифікація, про яку адміністрація сайту Вам повідомить.
                Про ці та інші послуги Ви можете дізнатися, зв'язавшись з адміністратором сайту в розділі «зворотний зв'язок».
                </p>
                </Typography>
                </Grid>
                </Grid>
            </Grid>  
        </Grid>
    );
}