import React, { useState, useEffect } from "react";
import useStylesSiteDetails from "../Styles/SiteDetailsStyles";
import Blank from "../Components/Blank";
import SiteOverviewTop from "../Components/SiteOverviewTop";
import SiteDetailsBottom from "../Components/SiteDetailsBottom";

//fetch the details of selected site. Pass in match to the id to fetch data from that site.

function SiteDetails({ match }) {
    const classes = useStylesSiteDetails();
    useEffect(() => {
        fetchSite();
    }, []);

    const [site, setSite] = useState({});

    const fetchSite = async () => {
        const fetchSite = await fetch(
            `http://localhost:4000/sites/${match.params.id}`
        );
        const site = await fetchSite.json();
        setSite(site);
    };
    return (
        <div className={classes.root}>
            <SiteOverviewTop site={site} />
            <Blank />
            <SiteDetailsBottom site={site} />
        </div>
    );
}

export default SiteDetails;
