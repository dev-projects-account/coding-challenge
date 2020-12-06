import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import useStylesSiteList from "../Styles/SiteListStyles";
import ToolbarSecondary from "../Components/ToolbarSecondary";
import ToolbarTertiary from "../Components/ToolbarTertiary";
import SiteListCard from "../Components/SiteListCard";

function SiteList() {
    const classes = useStylesSiteList();
    useEffect(() => {
        fetchSites();
    }, []);

    const [sites, setSites] = useState([]);

    const fetchSites = async () => {
        const data = await fetch("http://localhost:4000/sites");
        const sites = await data.json();
        setSites(sites);
        console.log(sites);
    };
    return (
        <div className={classes.root}>
            <ToolbarSecondary />
            <ToolbarTertiary />
            <Paper className={classes.appBarTertiary}></Paper>
            {sites.map((site) => (
                <div className={classes.mainContainer}>
                    <SiteListCard site={site} />
                </div>
            ))}
        </div>
    );
}

export default SiteList;
