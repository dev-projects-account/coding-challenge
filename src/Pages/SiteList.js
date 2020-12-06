import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import useStylesSiteList from "../Styles/SiteListStyles";

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
            <Toolbar className={classes.appBarSecondary}>
                <Typography
                    className={classes.secondaryAppBarText}
                    variant="h6"
                >
                    Sites
                </Typography>
            </Toolbar>
            <Toolbar className={classes.appBarTertiary}>
                <Typography variant="subtitle1">All Sites</Typography>
                <IconButton align="right">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
            <Paper className={classes.appBarTertiary}></Paper>
            {sites.map((site) => (
                <Link
                    className={classes.link}
                    to={`/sites/${site.id}`}
                    key={site.id}
                >
                    <Paper className={classes.paper}>
                        <Grid container spacing={2} wrap="nowrap">
                            <Grid item>
                                <div className={classes.image}>
                                    <Avatar
                                        alt="Track"
                                        className={classes.siteAvatar}
                                        src={
                                            site && site.images ? (
                                                site.images[0]
                                            ) : (
                                                <div>TT</div>
                                            )
                                        }
                                    ></Avatar>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm
                                container
                                wrap="nowrap"
                                zeroMinWidth
                            >
                                <Grid
                                    wrap="nowrap"
                                    className={classes.mainContainer}
                                    item
                                    sm
                                    container
                                    direction="column"
                                    spacing={2}
                                >
                                    <Grid item sm wrap="nowrap">
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                        >
                                            {site && site.title ? (
                                                <span>{site.title}</span>
                                            ) : (
                                                <span>Site Name</span>
                                            )}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            gutterBottom
                                        >
                                            <Typography
                                                overflow="hidden"
                                                textOverflow="elipsis"
                                                className={classes.addressText}
                                            >
                                                {site && site.address ? (
                                                    <Typography
                                                        noWrap
                                                        className={
                                                            classes.addressText
                                                        }
                                                    >
                                                        {site.address.street}
                                                        &nbsp;
                                                        {site.address.city}
                                                        &nbsp;
                                                        {site.address.state}
                                                        &nbsp;
                                                        {site.address.zipCode}
                                                    </Typography>
                                                ) : (
                                                    <span>Site Address</span>
                                                )}
                                            </Typography>
                                        </Typography>
                                        <Typography variant="body2">
                                            {site && site.contacts ? (
                                                <span>
                                                    {
                                                        site.contacts.main
                                                            .firstName
                                                    }
                                                    &nbsp;
                                                    {
                                                        site.contacts.main
                                                            .lastName
                                                    }
                                                </span>
                                            ) : (
                                                <span>Contact Name</span>
                                            )}
                                        </Typography>
                                    </Grid>
                                    <Grid item wrap="nowrap">
                                        <Typography
                                            variant="body2"
                                            style={{ cursor: "pointer" }}
                                        ></Typography>
                                    </Grid>
                                </Grid>

                                <ArrowForwardIosIcon
                                    className={classes.forward}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Link>
            ))}
        </div>
    );
}

export default SiteList;
