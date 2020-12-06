import { makeStyles } from "@material-ui/core/styles";

const useStylesSiteDetails = makeStyles((theme) => ({
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

export default useStylesSiteDetails;
