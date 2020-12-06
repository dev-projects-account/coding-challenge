import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import useStylesSiteList from "../Styles/SiteListStyles";

function ToolbarSecondary() {
    const classes = useStylesSiteList();
    return (
        <Toolbar className={classes.appBarSecondary}>
            <Typography className={classes.secondaryAppBarText} variant="h6">
                Sites
            </Typography>
        </Toolbar>
    );
}

export default ToolbarSecondary;
