import useStylesSiteDetails from "../Styles/SiteDetailsStyles";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { DEFAULT_BODY } from "../Constants";
import { DEFAULT_SUBTITLE } from "../Constants";

function SiteOverviewTop({ site }) {
    const classes = useStylesSiteDetails();
    return (
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
                                variant={DEFAULT_SUBTITLE}
                                className={classes.titleText}
                            >
                                {site && site.title ? (
                                    <span>{site.title}</span>
                                ) : (
                                    <span>Site Name</span>
                                )}
                            </Typography>
                            <Typography variant={DEFAULT_BODY} gutterBottom>
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
                            <Typography variant={DEFAULT_BODY}>
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
    );
}

export default SiteOverviewTop;
