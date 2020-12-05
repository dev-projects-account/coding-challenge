import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
    },
    paper: {
        padding: theme.spacing(2),
        alignItems: "flex-start",
        wrap: "nowrap",
        backgroundColor: "blue",
    },
    image: {
        width: 50,
        height: 128,
    },
    link: {
        textDecoration: "none",
    },
    siteAvatar: {
        height: "60px",
        width: "60px",
        background: "cover",
    },
    cardContainer: {
        flexWrap: "no-wrap",
    },
    forward: {
        marginTop: "40px",
        color: "white",
    },
    addressText: {
        overflow: "hidden",
        noWrap: true,
    },
    mainContainer: {
        width: "calc(95% + 11px)",
    },
    titleText: {
        color: "white",
    },
    blank: {
        height: "100px",
    },
    bottom: {
        display: "flex",
        flexDirection: "column",
        wrap: "nowrap",
        width: "calc(95% + 11px)",
    },
    bottomItem: {
        display: "flex",
        flexDirection: "row",
    },
    bottomIcon: {
        marginRight: "40px",
    },
    jobTitle: {
        marginLeft: "88px",
        textOverflow: "hidden",
        whiteSpace: "nowrap",
    },
}));

//fetch the details of selected site. Pass in match to the id to fetch data from that site.

function SiteDetails({ match }) {
    const classes = useStyles();
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
            <Paper className={classes.paper}>
                <Grid container spacing={2} wrap="nowrap">
                    <Link className={classes.link} to={`/`} key={site.id}>
                        <ArrowBackIosIcon className={classes.forward} />
                    </Link>
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
                    <Grid item xs={12} sm container wrap="nowrap" zeroMinWidth>
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
                                    className={classes.titleText}
                                >
                                    {site && site.title ? (
                                        <span>{site.title}</span>
                                    ) : (
                                        <span>Site Name</span>
                                    )}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <Typography
                                        overflow="hidden"
                                        textOverflow="elipsis"
                                        className={classes.addressText}
                                    >
                                        {site && site.address ? (
                                            <Typography
                                                noWrap
                                                className={classes.addressText}
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
                                            {site.contacts.main.firstName}
                                            &nbsp;
                                            {site.contacts.main.lastName}
                                        </span>
                                    ) : (
                                        <span>Contact Name</span>
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Card className={classes.blank}>
                <span></span>
            </Card>
            <Grid
                container
                spacing={2}
                wrap="nowrap"
                className={classes.bottom}
                zeroMinWidth
            >
                <Grid
                    item
                    wrap="nowrap"
                    zeroMinWidth
                    sm
                    xs={12}
                    className={classes.bottomItem}
                >
                    {site && site.contacts ? (
                        <span>
                            <Typography
                                variant="body2"
                                overflow="hidden"
                                textOverflow="elipsis"
                            >
                                <IconButton className={classes.bottomIcon}>
                                    <SupervisorAccountIcon />
                                </IconButton>
                                {site.contacts.main.firstName}&nbsp;
                                {site.contacts.main.lastName}
                                <br></br>
                                <span className={classes.jobTitle}>
                                    {site.contacts.main.jobTitle}
                                </span>
                            </Typography>
                        </span>
                    ) : (
                        <span>
                            <IconButton className={classes.bottomIcon}>
                                <SupervisorAccountIcon />
                            </IconButton>
                            Contact Info
                        </span>
                    )}
                </Grid>
                <Grid
                    item
                    wrap="nowrap"
                    zeroMinWidth
                    className={classes.bottomItem}
                >
                    <IconButton className={classes.bottomIcon}>
                        <PhoneIcon />
                    </IconButton>
                    {site && site.contacts ? (
                        <span>{site.contacts.main.phoneNumber}</span>
                    ) : (
                        <span>Contact Phone</span>
                    )}
                </Grid>
                <Grid item wrap="nowrap" zeroMinWidth>
                    {site && site.contacts ? (
                        <Typography
                            variant="body2"
                            noWrap
                            className={classes.addressText}
                        >
                            <IconButton className={classes.bottomIcon}>
                                <EmailIcon />
                            </IconButton>
                            <span>{site.contacts.main.email}</span>
                        </Typography>
                    ) : (
                        <span>
                            <IconButton className={classes.bottomIcon}>
                                <EmailIcon />
                            </IconButton>
                            Contact Email
                        </span>
                    )}
                </Grid>
                <Grid
                    item
                    wrap="nowrap"
                    zeroMinWidth
                    direction="row"
                    spacing={2}
                >
                    <span>
                        {site && site.contacts ? (
                            <Typography variant="body2" gutterBottom>
                                <Typography
                                    overflow="hidden"
                                    textOverflow="elipsis"
                                    className={classes.addressText}
                                >
                                    {site && site.address ? (
                                        <Typography
                                            variant="body2"
                                            noWrap
                                            className={classes.addressText}
                                        >
                                            <IconButton
                                                className={classes.bottomIcon}
                                            >
                                                <RoomIcon />
                                            </IconButton>
                                            {site.contacts.main.address.street}
                                            &nbsp;
                                            {site.contacts.main.address.city}
                                            &nbsp;
                                            {site.contacts.main.address.state}
                                            &nbsp;
                                            {site.contacts.main.address.zipCode}
                                        </Typography>
                                    ) : (
                                        <span>Contact Address</span>
                                    )}
                                </Typography>
                            </Typography>
                        ) : (
                            <span>
                                <IconButton className={classes.bottomIcon}>
                                    <RoomIcon />
                                </IconButton>
                                Contact Address
                            </span>
                        )}
                    </span>
                </Grid>
            </Grid>
        </div>
    );
}

export default SiteDetails;
