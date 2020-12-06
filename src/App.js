import React from "react";
import "./App.css";
import SiteList from "./Pages/SiteList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteDetails from "./Pages/SiteDetails";
import useAppStyles from "./Styles/AppStyles";
import ToolbarPrimary from "./Components/ToolbarPrimary";

//Material-ui classes

function App() {
    const classes = useAppStyles();
    return (
        <Router>
            <div className={classes.root}>
                <ToolbarPrimary />
                <Switch>
                    <Route path="/" exact component={SiteList} />
                    <Route path="/sites/:id" component={SiteDetails} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
