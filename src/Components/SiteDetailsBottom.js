import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import useStylesSiteDetails from "../Styles/SiteDetailsStyles";

function SiteDetailsBottom({ site }) {
    const classes = useStylesSiteDetails();
    return (
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
                <Typography
                    variant="body2"
                    overflow="hidden"
                    textOverflow="elipsis"
                >
                    <IconButton className={classes.bottomIcon}>
                        <PhoneIcon />
                    </IconButton>

                    {site && site.contacts ? (
                        <span>{site.contacts.main.phoneNumber}</span>
                    ) : (
                        <span>Contact Phone</span>
                    )}
                </Typography>
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
            <Grid item wrap="nowrap" zeroMinWidth direction="row" spacing={2}>
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
    );
}

export default SiteDetailsBottom;
