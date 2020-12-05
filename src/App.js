import React from "react";
import "./App.css";
import SiteList from "./Pages/SiteList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteDetails from "./Pages/SiteDetails";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

//Material-ui classes

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    primaryAppBar: {
        backgroundColor: "blue",
        justifyContent: "space-around",
    },
    white: {
        color: "black",
        backgroundColor: "white",
        height: "30px",
        width: "30px",
        fontSize: "20px",
        marginLeft: "20px",
    },
    menuButtonSeconary: {
        marginLeft: "10px",
    },
    toolbar: {
        textAlign: "center",
    },
}));

function App() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <AppBar className={classes.primaryAppBar} position="static">
                    <Toolbar className={classes.toolbar} variant="dense">
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" className={classes.title}>
                            Scheduling
                        </Typography>

                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <AppsIcon />
                            <Avatar className={classes.white}>D</Avatar>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route path="/" exact component={SiteList} />
                    <Route path="/sites/:id" component={SiteDetails} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
