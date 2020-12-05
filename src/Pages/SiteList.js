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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: "30px",
        alignItems: "flex-start",
        wrap: "nowrap",
    },
    image: {
        width: 50,
        height: 128,
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    link: {
        textDecoration: "none",
    },
    appBarSecondary: {
        display: "flex",
        backgroundColor: "blue",
        color: "white",
        justifyContent: "center",
        paddingRight: "70px",
        borderTop: "1px solid black",
        borderRadius: 0,
    },
    secondaryAppBarText: {
        justifyContent: "center",
    },
    siteAvatar: {
        height: "60px",
        width: "60px",
        background: "cover",
    },
    red: {
        backgroundColor: "red",
    },
    cardContainer: {
        flexWrap: "no-wrap",
    },
    forward: {
        marginTop: "40px",
    },
    appBarTertiary: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 0,
        height: "2px",
        padding: 0,
        paddingLeft: "20px",
    },
    addressText: {
        overflow: "hidden",
        noWrap: true,
    },
    mainContainer: {
        width: "calc(95% + 11px)",
    },
}));

function SiteList() {
    const classes = useStyles();
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
