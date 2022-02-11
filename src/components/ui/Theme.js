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
        h3: {
            color: "#343a40",
            fontSize: "2rem"
        },
        h4: {
            fontWeight: 500,
            fontSize: "1.2rem",
            color: "#343a40",
            
        },
        
        h5: {
            fontFamily: "Roboto",
            color: "#343a40",
            fontSize: "1rem",
            fontWeight: 400,
        },
        h6: {
            fontWeight: 300,
            color: "#343a40"
        },
        subtitle2: {
            fontSize: "0.75rem",
            color: "#6c757d",
            fontWeight: 400,
        },
        subtitle3: {
            fontSize: "0.8rem",
            color: "#6c757d",
        },
        body1: {
            fontFamily: "Roboto",
            color: "#495057;",
            fontWeight: 400,
            fontSize: "1rem",
            textAlign: "left",
            
        },
        newsItem: {
            color: "#495057",
            fontSize: "1rem",
        },

    }
});