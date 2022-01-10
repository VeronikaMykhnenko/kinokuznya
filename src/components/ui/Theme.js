import { createTheme } from "@material-ui/core";

const arcBlue = "#4582EC";
const arcOrange = "#FFBA60";
const darkSide = "#212529";
const lightGray = "#f8f9fa";
const whiteSnow = "#ffffff";

export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            black: `${darkSide}`,
            gray: `${lightGray}`
        },
        darkTheme: {
            main: `${darkSide}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
        whiteS: {
            main: `${whiteSnow}`
        },
    },
    typography: {
        tab: {
            fontFamily: "Roboto",
            textTransform: "none",
            color: "white",
            fontSize: "1rem"
        },
        link: {
            textTransform: "none",
            textDecoration: "none",
            color: "#adb5bd",
            fontSize: "1rem"
        }, 
        socialLink: {
            textTransform: "none",
            textDecoration: "none",
            color: "#adb5bd"
        },
        h4: {
            fontWeight: 300
            
        },
        h6: {
            fontWeight: 300,
            color: "#343a40"
        }
    }
});