import useStylesSiteList from "../Styles/SiteListStyles";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

function SiteListCard({ site }) {
    const classes = useStylesSiteList();
    return (
        <div className={classes.paper}>
            <Grid container spacing={2} wrap="nowrap">
                <Grid item>
                    <div className={classes.image}>
                        <Avatar
                            alt="Track"
                            style={{ height: "60px", width: "60px" }}
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
                    className={classes.mainContainer}
                >
                    <Grid
                        wrap="nowrap"
                        item
                        sm
                        container
                        direction="column"
                        spacing={2}
                    >
                        <Grid item sm wrap="nowrap">
                            <Typography gutterBottom variant="subtitle1">
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
                        <Grid item wrap="nowrap">
                            <Typography
                                variant="body2"
                                style={{ cursor: "pointer" }}
                            ></Typography>
                        </Grid>
                    </Grid>
                    <Link
                        className={classes.link}
                        to={`/sites/${site.id}`}
                        key={site.id}
                    >
                        <ArrowForwardIosIcon className={classes.forward} />
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default SiteListCard;
