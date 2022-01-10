import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Typography from '@material-ui/core/Typography';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { Checkbox, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";

import logo1 from "../../assets/logo1.png";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      height: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1.25em",
    },
  },
  logo: {
    height: "4em",
    [theme.breakpoints.down("md")]: {
      height: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
  },
  title: {
    flexGrow: 1,
  },
  tabContainer: {},

  tab: {
    ...theme.typography.tab,
    fontWeight: 700,
    minWidth: 10,
    marginLeft: "20px",
  },

  button: {
    marginLeft: "auto",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },

  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "white",
  },
  drawer: {
    backgroundColor: theme.palette.common.black,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.6,
  },
  drawerLogin: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
      textShadow: "0px 0px 1px white"
    }

    
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  

  const menuOptions = [
    { name: "головна", link: "/", activeIndex: 0, selectedIndex: 0 },
    { name: "Люди", link: "/люди", activeIndex: 0,  selectedIndex: 1 },
    { name: "Проекти", link: "/проекти", activeIndex: 0, selectedIndex: 2 },
    { name: "Кастинги", link: "/кастинги", activeIndex: 0, selectedIndex: 3 },
    { name: "Новини", link: "/новини", activeIndex: 0, selectedIndex: 4 },
    { name: "Rental&Sale", link: "/rental&sale", activeIndex: 0, activeIndex: 5}
  ];

  const routes = [
    { name: "Головна", link: "/", activeIndex: 0 },
    { name: "Люди", link: "/люди", activeIndex: 1 },
    { name: "Проекти", link: "/проекти", activeIndex: 2 },
    { name: "Кастинги", link: "/кастинги", activeIndex: 3 },
    { name: "Новини", link: "/новини", activeIndex: 4 },
    { name: "Rental&Sale", link: "/rental&sale", activeIndex: 5 }
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/вхід/реєстрація":
          props.setValue(6);
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);


  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="darkTheme"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
          />
        ))}
      </Tabs>
      <Button
        className={classes.button}
        component={Link}
        to="/Вхід/Реєстрація"
        size="small"
        variant="contained"
        color="primary"
        onClick={() => props.setValue(6)}
      >
        Вхід/Реєстрація
      </Button>
     
      <Checkbox
        icon={<Avatar className={classes.purpleAvatar}> AP</Avatar>}
        checkedIcon={<Avatar className={classes.orangeAvatar}> AP</Avatar>}
      />
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOPen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{selected: classes.drawerItemSelected}}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
          divider
          button
          component={Link}
          to="/Вхід/реєстрація"
          classes={{root: classes.drawerLogin, selected: classes.drawerItemSelected}}
          onClick={() => {setOpenDrawer(false);
            props.setValue(6);
         }}
            
            disableTypography
          >
            <ListItemText 
            className={classes.drawerItem}
             disableTypography>
              Вхід/реєстрація
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          style={{ background: "#212529" }}
          className={classes.appbar}
        >
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => props.setValue(0)}
              className={classes.logoContainer}
            >
              <img alt="company logo" className={classes.logo} src={logo1} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
